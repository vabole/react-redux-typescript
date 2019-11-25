import md5 from "blueimp-md5";
import { TicketNormalized, Ticket } from "../store/tickets/types";

export const normalizeTicket = (ticket: Ticket): TicketNormalized => ({
  ...ticket,
  id: md5(JSON.stringify(ticket))
});
