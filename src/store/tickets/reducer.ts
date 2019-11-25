import { Reducer } from "redux";
import { TicketNormalized, TicketsState, TicketsActionTypes } from "./types";
import { tickets } from "../../components/TicketsLoader/sampleTickets";
import { normalizeTicket } from "./utils";

export const initialState: TicketsState = {
  searchId: "",
  tickets: {},
  errors: [],
  isFetchingTickets: false,
  isFetchingSearchId: false,
  isPolling: false
};

const reducer: Reducer<TicketsState> = (state = initialState, action) => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_TICKETS_REQUEST: {
      return { ...state, fetchingTickets: true };
    }
    case TicketsActionTypes.FETCH_TICKETS_SUCCESS: {
      return {
        ...state,
        isFetchingTickets: false,
        tickets: { ...state.tickets, ...action.payload.map(normalizeTicket) }
      };
    }
    case TicketsActionTypes.FETCH_TICKETS_ERROR: {
      return {
        ...state,
        isFetchingTickets: false,
        errors: action.payload
      };
    }

    case TicketsActionTypes.FETCH_SEARCH_ID_REQUEST: {
      return {
        ...state,
        isFetchingSearchId: true
      };
    }
    case TicketsActionTypes.FETCH_SEARCH_ID_SUCCESS: {
      return {
        ...state,
        isFetchingSearchId: false,
        searchId: action.payload
      };
    }

    case TicketsActionTypes.FETCH_SEARCH_ID_ERROR: {
      return {
        ...state,
        isFetchingSearchId: false,
        error: action.payload
      };
    }

    case TicketsActionTypes.POLLING_START: {
      return {
        ...state,
        isPolling: true
      };
    }

    case TicketsActionTypes.POLLING_END: {
      return {
        ...state,
        isPolling: false
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as ticketsReducer };
