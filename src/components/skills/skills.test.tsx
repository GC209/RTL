import { render, screen, logRoles } from '@testing-library/react';
import Skills from "./skills";

describe('Skills (Test by Roles)', () => {
  const skills = ['HTML', 'React', 'JavaScript'];

  test('renders currectly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole('button', {
      name: "Log In"
    });
    expect(loginButtonElement).toBeInTheDocument();
  })

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const loggedInButtonElement = screen.queryByRole('button', {
      name: "Start learning"
    });
    expect(loggedInButtonElement).not.toBeInTheDocument();
  })
  test('start learning button is eventually displayed',async () => {
    const view = render(<Skills skills={skills} />);
    //logRoles(view.container);
    //screen.debug();
    const loggedInButtonElement = await screen.findByRole('button', {
      name: 'Start learning'
    }, {
      timeout: 2000
    });
    expect(loggedInButtonElement).toBeInTheDocument();
    //screen.debug();
  })
  
});