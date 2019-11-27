import md5 from "blueimp-md5";
import { TicketsNormalized, Ticket, TicketNormalized } from "./types";

export const normalizeTicket = (ticket: Ticket): TicketNormalized => ({
  ...ticket,
  id: md5(JSON.stringify(ticket))
});

export const getTicketId = (ticket: Ticket): string =>
  md5(JSON.stringify(ticket));

export const normalizeTickets = (tickets: Ticket[]): TicketsNormalized => {
  return tickets.reduce((normalizedCollection: TicketsNormalized, ticket) => {
    const normalizedTicket = normalizeTicket(ticket);
    return { ...normalizedCollection, [normalizedTicket.id]: normalizedTicket };
  }, {});
};
