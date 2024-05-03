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
})