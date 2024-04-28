import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
  test('reners correctly', () => {
    render(<Application />);
    
    const nameElement = screen.getByRole('textbox');
    expect(nameElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })
});