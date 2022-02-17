import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import RoutesPage from "./RoutesPage";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <RoutesPage />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
