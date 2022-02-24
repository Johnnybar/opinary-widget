import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Answer from "../Answer/Answer";
import "./App.scss";

type AppProps = {
  domElement: Element;
};

interface AnswerProps {
  answer: string;
  vote: number;
  id: number;
}
function App({ domElement }: AppProps) {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const [error, setError] = useState<Optional<string>>(null);

  const incrementVoteCount = (id: number) => {
    let currentAnswers = answers.map((answer) => {
      if (answer.id === id) {
        answer.vote++;
      }

      window.localStorage.setItem(String(answer.id), String(answer.vote));
      return answer;
    });
    setAnswers(currentAnswers);
  };

  useEffect(() => {
    try {
      const questions = domElement.getAttribute("data-questions");

      //add error handling if data attribute incorrect

      const { question, answers } = JSON.parse(questions as string);
      setQuestion(question);
      const answersArr = Object.values(answers).map((answer, i) => {
        const initialCount = window.localStorage.getItem(String(i)) || 0;
        return { answer: answer, vote: initialCount, id: i };
      });

      setAnswers(answersArr as []);
    } catch (error) {
      setError(error as string);
    }
  }, [domElement]);

  return (
    <div className="opinary-widget-app container w-75">
      <div className="row">
        {question && <h2 className="text-center">{question}</h2>}
        {answers &&
          answers.map(({ answer, vote, id }) => (
            <div className="col-4">
              <Answer
                answer={answer}
                vote={vote}
                id={id}
                incrementVoteCount={incrementVoteCount}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
