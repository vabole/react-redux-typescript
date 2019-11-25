import React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { ApplicationState } from "../../store";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

type AppProps = {
  store: Store<ApplicationState>;
};
export const App = (props: AppProps) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <div className="app_container">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};
