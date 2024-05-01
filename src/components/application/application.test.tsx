import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application (Test by Roles)', () => {
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

describe('Application (Test by Text Match)', () => {
  
  test('renders correctly (by string)', () => {
    render(<Application />)

    const customDivElem = screen.getByText('Custom Element'); //full string match
    expect(customDivElem).toBeInTheDocument();

    const customDivElem1 = screen.getByText('tom Element', {exact: false}); //substring match
    expect(customDivElem1).toBeInTheDocument();
  })

  test('renders correctly (by regex)', () => {
    render(<Application />)

    const customDivElem3 = screen.getByText(/element/i); ////substring match, ignore cases
    expect(customDivElem3).toBeInTheDocument();
  })

  test('renders correctly (by custom function)', () => {
    render(<Application />)

    const customDivElem3 = screen.getByText((content) => content.startsWith('Custom')); ////substring match, ignore cases
    expect(customDivElem3).toBeInTheDocument();
  })
})