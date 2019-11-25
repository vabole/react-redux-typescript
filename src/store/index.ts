import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { ticketsReducer } from "./tickets/reducer";

// import { applyMiddleware, createStore, Middleware } from "redux";
// import * as reduxLogger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleWare from "redux-saga";
// import reducers from "./rootReducer";

// The top-level state object.

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = () =>
  combineReducers({
    tickets: ticketsReducer
  });

//
// const middlewares: Middleware[] = [createSagaMiddleWare()];
//
// const devMode = process.env.NODE_ENV === "development";
//
// if (devMode) {
//   middlewares.push(reduxLogger.createLogger());
// }
//
// let enhancer = applyMiddleware(...middlewares);
//
// if (devMode) {
//   enhancer = composeWithDevTools(enhancer);
// }
//
// export default enhancer(createStore)(reducers);
