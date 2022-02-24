import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

type Props = {
  domElement: Element;
};
function App({ domElement }: Props) {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const questions = domElement.getAttribute("data-questions");
    //add error handling if data attribute incorrect
    console.log(questions, "this is questions");

    const { question, answers } = JSON.parse(questions as string);
    setQuestion(question);
    setAnswers(Object.values(answers));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
