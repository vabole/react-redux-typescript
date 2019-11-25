export interface TicketNormalized extends Ticket {
  id: string;
}

export type TicketsNormalized = {
  [id: string]: Ticket;
};

export interface Ticket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: Segment[];
}

export interface Segment {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета обратно
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface TicketsApiResponse {
  tickets: Ticket[];
  stop: boolean;
}

export interface SearchIdApiResponse {
  searchId: string;
}
export type StopFiltersKey = "all" | "0" | "1" | "2" | "3";
export type StopFilters = {
  [key: string]: boolean;
};

export interface TicketsState {
  readonly searchId: string;
  readonly tickets: Ticket[];
  readonly errors: [];
  readonly isFetchingTickets: boolean;
  readonly isFetchingSearchId: boolean;
  readonly isPolling: boolean;
  readonly stopsFilters: StopFilters;
  readonly sorting: "BY_DURATION" | "BY_PRICE";
}

export enum TicketsActionTypes {
  FETCH_TICKETS_REQUEST = "@@tickets/FETCH_TICKETS_REQUEST",
  FETCH_TICKETS_SUCCESS = "@@tickets/FETCH_TICKETS_SUCCESS",
  FETCH_TICKETS_ERROR = "@@tickets/FETCH_TICKETS_ERROR",

  FETCH_SEARCH_ID_REQUEST = "@@tickets/FETCH_SEARCH_ID_REQUEST",
  FETCH_SEARCH_ID_SUCCESS = "@@tickets/FETCH_SEARCH_ID_SUCCESS",
  FETCH_SEARCH_ID_ERROR = "@@tickets/FETCH_SEARCH_ID_ERROR",

  SORT_BY_DURATION = "@@tickets/SORT_BY_DURATION",
  SORT_BY_PRICE = "@@tickets/SORT_BY_PRICE",

  TOGGLE_STOPS_FILTER = "@@tickets/TOGGLE_STOPS_FILTER"
}
