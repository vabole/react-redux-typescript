import React from "react";
import styles from "./Main.module.css";
import { StopFiltersForm } from "../StopFiltersForm/StopFiltersForm";
import { SortingTabs } from "../SortingTabs/SortingTabs";
import { TicketsList } from "../TicketsList/TicketsList";

export const Main = () => {
  return (
    <main className={styles.main}>
      <StopFiltersForm />
      <div className={styles.tickets}>
        <SortingTabs />
        <TicketsList />
      </div>
    </main>
  );
};
