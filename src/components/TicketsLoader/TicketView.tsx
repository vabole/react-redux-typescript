import React from "react";
import styles from "./TicketView.module.css";
import { SegmentView } from "./SegmentView";
import {NormalizedTicket} from "../../types/Ticket";

type TicketViewProps = {
  ticket: NormalizedTicket;
};
export const TicketView = (props: TicketViewProps) => {
  const { ticket } = props;
  return (
    <article className={styles.ticket}>
      <div className={styles.title}>
        <div className={styles.price}>{ticket.price}</div>
        <div className={styles.carrier}>{ticket.carrier}</div>
      </div>
      {ticket.segments.map((segment, i) => (
        <SegmentView segment={segment} key={i}/>
      ))}
    </article>
  );
};
