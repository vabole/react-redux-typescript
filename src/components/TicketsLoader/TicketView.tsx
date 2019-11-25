import React from "react";
import styles from "./TicketView.module.css";
import { SegmentView } from "./SegmentView";
import { NormalizedTicket } from "../../types/Ticket";
import { priceString } from "./ticketViewUtils";

type TicketViewProps = {
  ticket: NormalizedTicket;
};
export const TicketView = (props: TicketViewProps) => {
  const { ticket } = props;
  return (
    <article className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{priceString(ticket.price)}</div>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          className={styles.carrier}
          alt={ticket.carrier}
        />
      </div>
      {ticket.segments.map((segment, i) => (
        <SegmentView segment={segment} key={i} />
      ))}
    </article>
  );
};
