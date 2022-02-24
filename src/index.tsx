import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";

const widgetDivs = document.querySelectorAll("#opinary-widget");

//Check if polls are identical, remove the identical ones
const removeIdenticalNodes = (widgetNodeList: NodeListOf<Element>) => {
  let widgetArr = Array.from(widgetNodeList);
  for (let i = 0; i < widgetArr.length; i++) {
    for (let j = 1; j < widgetArr.length; j++) {
      if (widgetArr[i].isEqualNode(widgetArr[j])) {
        widgetArr.splice(widgetArr.indexOf(widgetArr[i]), 1);
      }
    }
  }
  return widgetArr;
};

const uniqueWidgetDivs = removeIdenticalNodes(widgetDivs);

// Inject our React App into each
uniqueWidgetDivs.forEach((div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={div} />
    </React.StrictMode>,
    div
  );
});
