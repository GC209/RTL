import { render, screen } from "@testing-library/react"
import Counter from "./counter"
import user from "@testing-library/user-event";

describe('counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading")
    expect(countElement).toBeInTheDocument();

    const btnElement = screen.getByRole('button', {
      name: "Increment"
    });
    expect(btnElement).toBeInTheDocument();
  });
  test('renders at count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });
  test('onclick of the button counter changes to 1', async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', {
      name: "Increment"
    })
    await user.click(incrementBtn);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent("1");
  })

  test('onclick of the button twice counter changes to 2', async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', {
      name: "Increment"
    })
    await user.dblClick(incrementBtn);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent("2");
  })

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup();
    render(<Counter />);
    const inputElem = screen.getByRole('spinbutton');
    const setBtnElem = screen.getByRole('button', {
      name: 'Set'
    });
    const countElement = screen.getByRole('heading');
    await user.type(inputElem, '10');
    await user.click(setBtnElem);
    expect(countElement).toHaveTextContent('10');
  })

  test('correct order of focus', async () => {
    user.setup();
    render(<Counter />);
    const inputElem = screen.getByRole('spinbutton');
    const setBtnElem = screen.getByRole('button', {
      name: 'Set'
    });
    const incrementBtn = screen.getByRole('button', {
      name: "Increment"
    })
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(inputElem).toHaveFocus();
    await user.tab();
    expect(setBtnElem).toHaveFocus();
  })
})