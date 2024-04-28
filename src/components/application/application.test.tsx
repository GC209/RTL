import { getByRole, render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
  test('reners correctly', () => {
    render(<Application />);
    
    const jobHeadingElement = screen.getByRole('heading', {
      level: 1
    });
    expect(jobHeadingElement).toBeInTheDocument();

    const sectionElement = screen.getByRole('heading', {
      level: 2
    });
    expect(sectionElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: "Name"
    });
    expect(nameElement).toBeInTheDocument();

    //alternate way of querying the serch by label text
    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();

    //getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    //getByDisplayValue
    const nameElement4 = screen.getByDisplayValue('Gaurav');
    expect(nameElement4).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
    

    const bioElement = screen.getByRole('textbox', {
      name: "Bio"
    });
    expect(bioElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })
});