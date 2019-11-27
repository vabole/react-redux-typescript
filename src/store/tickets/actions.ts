import { action } from "typesafe-actions";
import { StopFiltersKey, Ticket, TicketsActionTypes } from "./types";

//** Fetch tickets **/
export const fetchTicketsRequest = () =>
  action(TicketsActionTypes.FETCH_TICKETS_REQUEST);

export const fetchTicketsSuccess = (tickets: Ticket[]) =>
  action(TicketsActionTypes.FETCH_TICKETS_SUCCESS, tickets);

export const fetchTicketsError = (error: any) =>
  action(TicketsActionTypes.FETCH_TICKETS_ERROR, error);

//** Fetch searchId **/
export const fetchSearchIdRequest = () =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_REQUEST);

export const fetchSearchIdSuccess = (searchId: string) =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_SUCCESS, searchId);

export const fetchSearchIdError = (error: any) =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_ERROR, error);

/* Sorting actions */
export const sortByDurationAction = () =>
  action(TicketsActionTypes.SORT_BY_DURATION);

export const sortByPriceAction = () => action(TicketsActionTypes.SORT_BY_PRICE);

/* Togle flight-stops filters */
export const toggleStopsFilterAction = (filterToToggle: StopFiltersKey) =>
  action(TicketsActionTypes.TOGGLE_STOPS_FILTER, filterToToggle);
