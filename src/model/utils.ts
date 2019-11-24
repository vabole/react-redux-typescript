import md5 from "blueimp-md5";
import { NormalizedTicket, Ticket } from "../types/Ticket";

export const normalizeTicket = (ticket: Ticket): NormalizedTicket => ({
  ...ticket,
  id: md5(JSON.stringify(ticket))
});
