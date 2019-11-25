export interface TicketNormalized extends Ticket {
  id: string;
}

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

export interface TicketsState {
  readonly searchId: string;
  readonly tickets: { [key: string]: TicketNormalized };
  readonly errors: [];
  readonly isFetchingTickets: boolean;
  readonly isFetchingSearchId: boolean;
  readonly isPolling: boolean;
}

export enum TicketsActionTypes {
  FETCH_TICKETS_REQUEST = "@@tickets/FETCH_TICKETS_REQUEST",
  FETCH_TICKETS_SUCCESS = "@@tickets/FETCH_TICKETS_SUCCESS",
  FETCH_TICKETS_ERROR = "@@tickets/FETCH_TICKETS_ERROR",

  POLLING_START = "@@tickets/POLLING_START",
  POLLING_END = "@@tickets/POLLING_END",

  FETCH_SEARCH_ID_REQUEST = "@@tickets/FETCH_SEARCH_ID_REQUEST",
  FETCH_SEARCH_ID_SUCCESS = "@@tickets/FETCH_SEARCH_ID_SUCCESS",
  FETCH_SEARCH_ID_ERROR = "@@tickets/FETCH_SEARCH_ID_ERROR"
}
