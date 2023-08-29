import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders dropdown heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Dropdown component/i);
  expect(linkElement).toBeInTheDocument();
});
