import { createSelector } from "reselect";
import { StopFilters, Ticket } from "./types";
import { ApplicationState } from "../index";
import { getNumberOfStops } from "./helpers";

export const sortingByPriceIsOn = (state: ApplicationState) =>
  state.sorting === "BY_PRICE";

export const stopsFilters = (state: ApplicationState) => state.stopsFilters;

const tickets = (state: ApplicationState) => state.tickets;
const sorting = (state: ApplicationState) => state.sorting;

const flightDuration = (ticket: Ticket): number =>
  ticket.segments.reduce((duration, segment) => duration + segment.duration, 0);

const sortByDuration = (tickets: Ticket[]): Ticket[] =>
  tickets
    .slice()
    .sort(
      (ticket1, ticket2) => flightDuration(ticket1) - flightDuration(ticket2)
    );

const sortByPrice = (tickets: Ticket[]): Ticket[] =>
  tickets.slice().sort((ticket1, ticket2) => ticket1.price - ticket2.price);

const take5 = (tickets: Ticket[]) => {
  return tickets.slice(0, 5);
};

const applyStopsFilters = (tickets: Ticket[], stopsFilters: StopFilters) => {
  let filtered = [...tickets];
  if (stopsFilters["all"]) {
    return filtered;
  }
  [0, 1, 2, 3].forEach(i => {
    if (!stopsFilters[i]) {
      filtered = filtered.filter(
        ticket => !getNumberOfStops(ticket).includes(i)
      );
    }
  });
  return filtered;
};

export const sortingSelector = createSelector(
  [tickets, sorting, stopsFilters],
  (tickets, sorting, stopsFilters) => {
    switch (sorting) {
      case "BY_DURATION":
        return applyStopsFilters(sortByDuration(tickets), stopsFilters);
      case "BY_PRICE":
        return applyStopsFilters(sortByPrice(tickets), stopsFilters);
    }
  }
);

export const visibleTickets = createSelector(sortingSelector, take5);
