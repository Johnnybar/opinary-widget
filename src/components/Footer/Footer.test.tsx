import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders learn react link", () => {
  render(<Footer />);
  const footerText = screen.getByText(/We help/i);
  expect(footerText).toBeInTheDocument();
});
