import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Answer from "../Answer/Answer";
import "./App.scss";

type AppProps = {
  domElement: Element;
};

interface Answer {
  answer: string;
  vote: number;
  id: number;
}
function App({ domElement }: AppProps) {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState<Answer[]>([]);

  const incrementVoteCount = (id: number) => {
    let currentAnswers = answers.map((answer) => {
      if (answer.id === id) {
        answer.vote = answer.vote + 1;
      }
      console.log(answer, "answer");

      return answer;
    });
    setAnswers(currentAnswers);
  };
  useEffect(() => {
    const questions = domElement.getAttribute("data-questions");
    //add error handling if data attribute incorrect

    const { question, answers } = JSON.parse(questions as string);
    setQuestion(question);
    const answersArr = Object.values(answers).map((answer, i) => {
      return { answer: answer, vote: 0, id: i };
    });

    setAnswers(answersArr as []);
  }, []);

  return (
    <div className="App">
      {question && <div>{question}</div>}
      {answers &&
        answers.map(({ answer, vote, id }) => (
          <Answer
            answer={answer}
            vote={vote}
            id={id}
            incrementVoteCount={incrementVoteCount}
          />
        ))}
    </div>
  );
}

export default App;
