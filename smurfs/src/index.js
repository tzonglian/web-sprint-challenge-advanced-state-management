import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import { appReducer } from "./reducers/appReducer.js";

const store = createStore(appReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
