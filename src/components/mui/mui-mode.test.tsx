import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";
import { Appproviders } from "../../providers/app-providers";

describe('MuiMode', () => {
  test('renders test correctly', () => {
    render(<MuiMode />);
    const headingElem = screen.getByRole('heading');
    expect(headingElem).toHaveTextContent('dark mode');
  })
})