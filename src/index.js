import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const NewApp = require("./components/message-list").default;

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

renderApp(App);

if (module.hot) {
  module.hot.accept("./components/message-list", () => {
    renderApp(NewApp);
  });
}
