import { Reducer } from "redux";
import { TicketsState, TicketsActionTypes } from "./types";
import { allStopFiltersOn, toggleStopsFilter } from "./helpers";

export const initialState: TicketsState = {
  searchId: "",
  tickets: [],
  errors: [],
  stopsFilters: allStopFiltersOn,
  sorting: "BY_PRICE",
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
        tickets: [...state.tickets, ...action.payload]
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

    case TicketsActionTypes.SORT_BY_PRICE: {
      return {
        ...state,
        sorting: "BY_PRICE"
      };
    }

    case TicketsActionTypes.SORT_BY_DURATION: {
      return {
        ...state,
        sorting: "BY_DURATION"
      };
    }

    case TicketsActionTypes.TOGGLE_STOPS_FILTER: {
      return {
        ...state,
        stopsFilters: toggleStopsFilter(state.stopsFilters, action.payload)
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as ticketsReducer };
