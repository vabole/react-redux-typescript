import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { ticketsReducer } from "./tickets/reducer";
import { TicketsState } from "./tickets/types";
import { ticketsSaga } from "./tickets/sagas";

export { initialState } from "./tickets/reducer";

export type ApplicationState = TicketsState;
export const createRootReducer = () =>
  combineReducers({
    tickets: ticketsReducer
  });

export function* rootSaga() {
  yield all([fork(ticketsSaga)]);
}
