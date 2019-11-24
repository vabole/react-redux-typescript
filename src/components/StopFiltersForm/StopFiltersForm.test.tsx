import React from "react";
import ReactDOM from "react-dom";
import { StopFiltersForm } from "./StopFiltersForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StopFiltersForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
