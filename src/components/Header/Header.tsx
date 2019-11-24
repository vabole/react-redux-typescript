import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
};
