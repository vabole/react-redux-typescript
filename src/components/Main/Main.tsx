import React from "react";
import styles from "./Main.module.css";
import { StopFiltersForm } from "../StopFiltersForm/StopFiltersForm";
import { SortingTabs } from "../SortingTabs/SortingTabs";
import { TicketsLoader } from "../TicketsLoader/TicketsLoader";
import { tickets } from "../TicketsLoader/sampleTickets";

const normalizedTickets = tickets.map(normalizeTicket);
export const Main = () => {
  return (
    <main className={styles.main}>
      <StopFiltersForm />
      <div>
        <SortingTabs />
        <TicketsLoader tickets={tickets} />
      </div>
    </main>
  );
};
