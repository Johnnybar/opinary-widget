import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Answer from "./Answer";

describe("Answer", () => {
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
  test("Should render Answer", async () => {
    const mockAnswerObj = {
      answer: "an answer",
      vote: 0,
      id: "2",
      incrementVoteCountMock: function () {},
    };
    render(
      <Answer
        answer={mockAnswerObj.answer}
        vote={mockAnswerObj.vote}
        id={mockAnswerObj.id}
        incrementVoteCount={mockAnswerObj.incrementVoteCountMock}
      />,
      container
    );
    expect(screen.getByText("Vote count: 0")).toBeInTheDocument();
  });
});
