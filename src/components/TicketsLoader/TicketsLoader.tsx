import React from "react";
import styles from "./TicketsLoader.module.css";
import { TicketNormalized } from "../../store/tickets/types";

import { TicketView } from "./TicketView";

export type TicketsLoaderProps = {
  tickets: TicketNormalized[];
};

export const TicketsLoader = (props: TicketsLoaderProps) => {
  const { tickets } = props;
  return (
    <div className={styles.ticketsContainer}>
      {tickets.map(ticket => (
        <TicketView ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
};
