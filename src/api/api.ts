import { BASE_URL } from "../config";
import {
  SearchIdApiResponse,
  TicketsApiResponse
} from "../store/tickets/types";

async function get(route: string, baseUrl = BASE_URL) {
  try{
    const response = await fetch(baseUrl + route, {
      headers: {
        Accept: "application/json"
      }
    });
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }catch (e) {
    // do nothing -> will try again later
  }
}

export async function getSearchId(): Promise<SearchIdApiResponse> {
  return get("/search");
}

export async function getTickets(
  searchId: string
): Promise<TicketsApiResponse> {
  return get(`/tickets?searchId=${searchId}`);
}
