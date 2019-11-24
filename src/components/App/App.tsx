import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Main />
    </div>
  );
};
