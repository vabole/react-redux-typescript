import md5 from "blueimp-md5";
import { TicketNormalized, Ticket } from "./types";

export const normalizeTicket = (ticket: Ticket): TicketNormalized => ({
  ...ticket,
  id: md5(JSON.stringify(ticket))
});
