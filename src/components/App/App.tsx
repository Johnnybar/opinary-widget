import React from "react";
import { useState, useEffect } from "react";
import Answer from "../Answer/Answer";
import "./App.scss";

function App({ domElement }: AppProps) {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const [error, setError] = useState<Optional<string>>(null);

  //increment vote count and add to local storage with exact id based on poll id and index
  const incrementVoteCount = (id: string) => {
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
      if (!questions) {
        return;
      }
      const { question, answers, questionId } = JSON.parse(questions as string);
      setQuestion(question);
      // create array of answers object with 3 props and set it to answers
      const answersArr = answers.map((answer: AnswerProps, i: number) => {
        //exactId makes sure different poll's questions on same page have unique key in localstorage
        const exactId = String(i) + String(questionId);
        const initialCount = window.localStorage.getItem(exactId) || 0;
        return {
          answer: answer,
          vote: initialCount,
          id: exactId,
        };
      });
      setAnswers(answersArr as AnswerProps[]);
    } catch (error) {
      setError(error as string);
      console.log(error);
    }
  }, [domElement]);

  return (
    <div className="opinary-widget-app container w-75">
      <header>Poll Header</header>
      <div className="opinary-widget-app__question-wrapper row">
        {question && (
          <h2 className="opinary-widget-app__question-title text-center">
            {question}
          </h2>
        )}
        {answers &&
          answers.map(({ answer, vote, id }) => (
            <div key={id} className="col-4 opinary-widget-app__answer-wrapper">
              <Answer
                answer={answer}
                vote={vote}
                id={id}
                incrementVoteCount={incrementVoteCount}
              />
            </div>
          ))}
      </div>
      {error && (
        <div className="opinary-widget-app__answer-wrapper">
          The following error has occurred: {error}
        </div>
      )}
    </div>
  );
}
export default App;
