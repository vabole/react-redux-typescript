import React from "react";
import ReactDOM from "react-dom";
import { SortingTabs } from "./SortingTabs";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SortingTabs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
