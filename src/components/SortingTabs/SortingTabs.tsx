import React from "react";
import styles from "./SortingTabs.module.css";
import { useDispatch, useSelector } from "react-redux";

import { sortingByPriceIsOn } from "../../store/tickets/selectors";
import {
  sortByDurationAction,
  sortByPriceAction
} from "../../store/tickets/actions";

export const SortingTabs = () => {
  const dispatch = useDispatch();
  const sortByPrice = () => {
    dispatch(sortByPriceAction());
  };

  const sortByDuration = () => {
    dispatch(sortByDurationAction());
  };

  const sortingByPrice = useSelector(sortingByPriceIsOn);
  return (
    <div className={styles.tabs}>
      <button
        className={styles.tab}
        data-active={sortingByPrice}
        onClick={sortByPrice}
      >
        Самый дешёвый
      </button>
      <button
        className={styles.tab}
        data-active={!sortingByPrice}
        onClick={sortByDuration}
      >
        Самый быстрый
      </button>
    </div>
  );
};
