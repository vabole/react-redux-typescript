import { get, retryGet } from "./get";
import { tickets } from "../components/TicketsLoader/sampleTickets";
import { TicketNormalized } from "../store/tickets/types";
import { normalizeTicket } from "./utils";

const routes = {
  searchId: "/search",
  tickets: "/tickets"
};

const fetchSearchId = async (): Promise<string> => {
  const { searchId } = await retryGet(routes.searchId);
  return searchId;
};

export const fetchTickets = async (): Promise<TicketNormalized[]> => {
  try {
    const searchId = await fetchSearchId();
    const tickets = [];

    const MAX_ITERATIONS = 500;
    for (let stop = false, i = 0; i++; i < MAX_ITERATIONS && !stop) {
      const result = await get(routes.tickets);
      tickets.push(...result.map(normalizeTicket));
    }
  } catch (e) {
    console.warn(e);
    return Promise.reject(new Error(e));
  }
  return [];
};
