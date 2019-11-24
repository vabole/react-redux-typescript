import React from "react";
import styles from "./StopFiltersForm.module.css";

export const StopFiltersForm = () => {
  return (
    <form className={styles.form}>
      <legend>Количество пересадок</legend>

      <label htmlFor="all">
        <input id="all" type="checkbox"></input>
        Все
      </label>

      <label htmlFor="no-stops">
        <input id="no-stops" type="checkbox"></input>
        Без пересадок
      </label>

      <label htmlFor="1-stop">
        <input id="1-stop" type="checkbox"></input>1 пересадка
      </label>

      <label htmlFor="2-stops">
        <input id="2-stop" type="checkbox"></input>2 пересадки
      </label>

      <label htmlFor="3-stops">
        <input id="3-stops" type="checkbox"></input>3 пересадки
      </label>
    </form>
  );
};
