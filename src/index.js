import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";

const rootReducers = combineReducers({ movieReducer });
const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  document.getElementById("root")
);
