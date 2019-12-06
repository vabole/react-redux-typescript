import React, { useCallback } from "react";
import styles from "./StopFiltersForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleStopsFilterAction } from "../../store/tickets/actions";
import { StopFiltersKey } from "../../store/tickets/types";
import { stopsFilters } from "../../store/tickets/selectors";

type CheckBoxWithLabelProps = {
  filter: string;
  label: string;
};
const CheckBoxWithLabel = (props: CheckBoxWithLabelProps) => {
  const { label } = props;
  const filter = props.filter as StopFiltersKey;
  const dispatch = useDispatch();
  const filters = useSelector(stopsFilters);
  const isChecked = filters[filter];
  const toggleFilterAction = useCallback(
    () => dispatch(toggleStopsFilterAction(filter)),
    [filter, dispatch]
  );

  return (
    <label htmlFor={filter}>
      <input
        id={filter}
        type="checkbox"
        checked={isChecked}
        onChange={toggleFilterAction}
      />
      {label}
    </label>
  );
};

export const StopFiltersForm = () => (
  <form className={styles.form}>
    <legend>Количество пересадок</legend>

    <CheckBoxWithLabel filter="all" label="Все" />

    <CheckBoxWithLabel filter="0" label="Без пересадок" />
    <CheckBoxWithLabel filter="1" label="1 пересадка" />
    <CheckBoxWithLabel filter="2" label="2 пересадки" />
    <CheckBoxWithLabel filter="3" label="3 пересадки" />
  </form>
);
