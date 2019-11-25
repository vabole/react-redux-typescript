import { BASE_URL } from "../config";

const MAX_RETRIES = 3;

export const get = async (route: string) => {
  const response = await fetch(BASE_URL + route);
  if (response.ok) {
    return response.json();
  } else return Promise.reject(response);
};

export const retryGet = async (route: string, retry = 0): Promise<any> => {
  try {
    return get(route);
  } catch (e) {
    console.warn(e);
    if (retry < MAX_RETRIES) {
      return retryGet(route, retry + 1);
    }
    return Promise.reject(new Error("Max retries exceeded"));
  }
};
