import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
