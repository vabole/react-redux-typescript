import React from "react";
import styles from "./TicketView.module.css";
import { SegmentView } from "./SegmentView";
import { Ticket } from "../../store/tickets/types";
import { carrierImg, priceString } from "./ticketViewUtils";

type TicketViewProps = {
  ticket: Ticket;
};
export const TicketView = (props: TicketViewProps) => {
  const { ticket } = props;
  return (
    <article className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{priceString(ticket.price)}</div>
        <img
          src={carrierImg(ticket)}
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
