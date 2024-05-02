import { render, screen } from "@testing-library/react"
import Counter from "./counter"
import user from "@testing-library/user-event";

describe('counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeInTheDocument();
  });
  describe('renders at count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });
  test('onclick of the button counter changes to 1', () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', {
      name: "Increment"
    })
    user.click(incrementBtn);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent("1");
  })
})