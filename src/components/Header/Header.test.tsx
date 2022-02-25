import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Header from "./Header";

describe("Header", () => {
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
  test("Renders Header", () => {
    render(<Header />);
    const headerText = screen.getByText(/Opinary Poll/i);
    expect(headerText).toBeInTheDocument();
  });
});
