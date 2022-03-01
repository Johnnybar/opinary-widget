import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import Footer from "./Footer";

describe("Footer", () => {
  let container: any;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("Renders Footer", () => {
    render(<Footer />, container);
    const footerText = screen.getByText(/We help/i);
    expect(footerText).toBeInTheDocument();
  });
});
