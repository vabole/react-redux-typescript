import React from "react";
import ReactDOM from "react-dom";
import { TicketView } from "./TicketView";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const ticket = {
    id: "test_id",
    price: 43264,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T08:56:00.000Z",
        stops: ["IST"],
        duration: 1601
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T10:11:00.000Z",
        stops: [],
        duration: 969
      }
    ]
  };
  ReactDOM.render(<TicketView ticket={ticket} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
