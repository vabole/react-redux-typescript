import { StopFilters, StopFiltersKey, Ticket } from "./types";

export const allStopFiltersOn: StopFilters = {
  all: true,
  "0": true,
  "1": true,
  "2": true,
  "3": true
};

export const allStopFiltersOff: StopFilters = {
  all: false,
  "0": false,
  "1": false,
  "2": false,
  "3": false
};

export const toggleStopsFilter = (
  filtersState: StopFilters,
  filterToToggle: StopFiltersKey
): StopFilters => {
  if (filterToToggle === "all") {
    if (filtersState.all) {
      return { ...allStopFiltersOff };
    } else {
      return { ...allStopFiltersOn };
    }
  }
  const currentFilterState = filtersState[filterToToggle];
  if (currentFilterState) {
    return {
      ...filtersState,
      [filterToToggle]: !currentFilterState,
      all: false
    };
  }

  const newState = { ...filtersState, [filterToToggle]: !currentFilterState };
  if (newState[0] && newState[1] && newState[2] && newState[3]) {
    return { ...allStopFiltersOn };
  }
  return newState;
};

export const getNumberOfStops = (ticket: Ticket): number[] =>
  ticket.segments.map(segment => segment.stops.length);
