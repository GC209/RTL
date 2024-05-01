import { render, screen } from '@testing-library/react';
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
      name: "User is logged In"
    });
    expect(loggedInButtonElement).not.toBeInTheDocument();
  })
});