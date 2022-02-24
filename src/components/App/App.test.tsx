import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

describe("App", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    container.setAttribute("id", "opinary-widget-mock");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("Should render App without error", async () => {
    await act(async () => {
      const widgetDivs = Array.from(
        document.querySelectorAll("#opinary-widget-mock")
      );

      widgetDivs.forEach((div) => {
        render(<App domElement={div} />);
      });
      const errorMessage = screen.queryByText(/The following error/i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});
