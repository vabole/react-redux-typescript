import { action } from "typesafe-actions";
import {
  SearchIdApiResponse,
  TicketsActionTypes,
  TicketsApiResponse
} from "./types";

//** Fetch tickets **/
export const fetchTicketsRequest = () =>
  action(TicketsActionTypes.FETCH_TICKETS_REQUEST);

export const fetchTicketsSuccess = (response: TicketsApiResponse) =>
  action(TicketsActionTypes.FETCH_TICKETS_SUCCESS, response.tickets);

export const fetchTicketsError = (error: any) =>
  action(TicketsActionTypes.FETCH_TICKETS_ERROR, error);

//** Fetch searchId **/
export const fetchSearchIdRequest = () =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_REQUEST);

export const fetchSearchIdSuccess = (response: SearchIdApiResponse) =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_SUCCESS, response.searchId);

export const fetchSearchIdError = (error: any) =>
  action(TicketsActionTypes.FETCH_SEARCH_ID_ERROR, error);

//** Polling actions**/
export const pollingStart = () => action(TicketsActionTypes.POLLING_START);
export const pollingEnd = () => action(TicketsActionTypes.POLLING_END);
