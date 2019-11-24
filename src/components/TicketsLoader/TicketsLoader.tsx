import React from "react";
import styles from "./TicketsLoader.module.css";
import { Ticket } from "../../types/Ticket";

import { TicketView } from "./TicketView";

export type TicketsLoaderProps = {
  tickets: Ticket[];
};

export const TicketsLoader = (props: TicketsLoaderProps) => {
  const { tickets } = props;
  return (
    <div className={styles.ticketsContainer}>
      {tickets.map(ticket => (
        <TicketView ticket={ticket} />
      ))}
    </div>
  );
};
