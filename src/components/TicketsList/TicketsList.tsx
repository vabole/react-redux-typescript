import React from "react";
import styles from "./TicketsList.module.css";

import { TicketView } from "./TicketView";
import { getTicketId } from "../../store/tickets/utils";
import { useSelector } from "react-redux";
import { visibleTickets } from "../../store/tickets/selectors";

export const TicketsList = () => {
  const tickets = useSelector(visibleTickets);
  return (
    <div className={styles.ticketsContainer}>
      {tickets.map(ticket => (
        <TicketView ticket={ticket} key={getTicketId(ticket)} />
      ))}
    </div>
  );
};
