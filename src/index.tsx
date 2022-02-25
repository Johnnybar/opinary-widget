import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";

const widgetDivs = document.querySelectorAll(".opinary-widget");

//Check if polls are identical, remove the identical ones
const removeIdenticalNodes = (widgetNodeList: NodeListOf<Element>) => {
  let widgetArr = Array.from(widgetNodeList);
  for (let i = 1; i < widgetArr.length; i++) {
    let node1 = widgetArr[i - 1];
    let node2 = widgetArr[i];
    if (node1.isEqualNode(node2)) {
      widgetArr.splice(widgetArr.indexOf(node2), 1);
    }
  }

  return widgetArr;
};

const uniqueWidgetDivs = removeIdenticalNodes(widgetDivs);

// Inject each widget
uniqueWidgetDivs.forEach((div, widgetIndex) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={div} widgetIndex={widgetIndex} />
    </React.StrictMode>,
    div
  );
});
