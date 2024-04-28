/*
-Greet should render the text hello
-If a name is passed as props in the component then it should show Hello followed by the name passed 
*/

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const testElement = screen.getByText(/Hello/i);
    expect(testElement).toBeInTheDocument();
  })

  test('renders with a name', () => {
    render(<Greet name='Gaurav' />);
    const testElement = screen.getByText('Hello Gaurav');
    expect(testElement).toBeInTheDocument();
  })
})
