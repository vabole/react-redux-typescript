import React from "react";
import styles from "./SortingTabs.module.css";

export const SortingTabs = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab} data-active='true'>Самый быстрый</div>
      <div className={styles.tab} data-active='false'>Самый дешёвый</div>
    </div>
  );
};
