import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";

const WidgetDivs = document.querySelectorAll(".opinary-widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
});
