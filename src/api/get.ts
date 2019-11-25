import { BASE_URL } from "../config";

export async function get(route: string, baseUrl = BASE_URL) {
  const response = await fetch(baseUrl + route, {
    headers: {
      Accept: "application/json"
    }
  });
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
}
