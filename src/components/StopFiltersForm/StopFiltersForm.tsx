import React from "react";
import styles from "./StopFiltersForm.module.css";

type CheckBoxWithLabelProps = {
  filter: string;
  label: string;
};
const CheckBoxWithLabel = (props: CheckBoxWithLabelProps) => {
  const { filter, label } = props;
  return (
    <label htmlFor={filter}>
      <input id={filter} type="checkbox" />
      {label}
    </label>
  );
};


export const StopFiltersForm = () => {
  return (
    <form className={styles.form}>
      <legend>Количество пересадок</legend>

      <CheckBoxWithLabel filter='all' label='Все'/>
      <CheckBoxWithLabel filter='no_stops' label='Без пересадок'/>
      <CheckBoxWithLabel filter='1_stop' label='1 пересадка'/>
      <CheckBoxWithLabel filter='2_stops' label='2 пересадки'/>
      <CheckBoxWithLabel filter='3_stops' label='3 пересадки'/>
    </form>
  );
};
