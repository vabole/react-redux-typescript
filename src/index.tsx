import React from "react";
import "./index.css";
import { App } from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { hydrate, render } from "react-dom";
import "normalize.css";
import configureStore from "./configureStore";
import { initialState } from "./store";

const store = configureStore(initialState);

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App store={store} />, rootElement);
} else {
  render(<App store={store} />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
