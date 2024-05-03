import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "./counter-two";

describe('Counter two', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    const headingElem = screen.getByText("Counter two");
    expect(headingElem).toBeInTheDocument();
  })

  test('handlers are called', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />)
    const incrementBtn = screen.getByRole('button', {
      name: 'Increment'
    });
    const decrementBtn = screen.getByRole('button', {
      name: 'Decrement'
    });
    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  })
})