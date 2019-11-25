import { connect } from "react-redux";
import { TicketsList } from "./TicketsList";
import { ApplicationState } from "../../store";

const mapStateToProps = ({ tickets }: ApplicationState) => ({
  tickets: tickets
    .slice()
    .sort((ticket1, ticket2) => ticket1.price - ticket2.price)
    .slice(0, 5)
});

export const TicketsListConnected = connect(mapStateToProps)(TicketsList);
