import React from "react";
import styles from "./Main.module.css";
import { StopFiltersForm } from "../StopFiltersForm/StopFiltersForm";
import { SortingTabs } from "../SortingTabs/SortingTabs";
import { TicketsLoader } from "../TicketsLoader/TicketsLoader";
import { tickets } from "../TicketsLoader/sampleTickets";
import { normalizeTicket } from "../../api/utils";

const normalizedTickets = tickets.map(normalizeTicket);

export const Main = () => {
  return (
    <main className={styles.main}>
      <StopFiltersForm />
      <div className={styles.tickets}>
        <SortingTabs />
        <TicketsLoader tickets={normalizedTickets} />
      </div>
    </main>
  );
};
