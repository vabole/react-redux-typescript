import React from "react";
import styles from "./Main.module.css";
import { StopFiltersForm } from "../StopFiltersForm/StopFiltersForm";
import { SortingTabs } from "../SortingTabs/SortingTabs";

export const Main = () => {
  return (
    <main className={styles.main}>
      <StopFiltersForm />
      <SortingTabs/>
    </main>
  );
};
