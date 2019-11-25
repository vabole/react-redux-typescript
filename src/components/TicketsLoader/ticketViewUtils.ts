import { Segment } from "../../store/tickets/types";

const SEPARATOR = "–";
// Get time in HH:MM format
const getReadableTime = (date: Date): string => {
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
};

/**
 * Get travel time as:
 * HH:MM - HH:MM
 */
export const getReadableStartToEndTime = (segment: Segment): string => {
  const departureDate = new Date(segment.date);
  const arrivalDate = new Date(
    departureDate.getTime() + segment.duration * 60_000
  );
  return `${getReadableTime(departureDate)} ${SEPARATOR} ${getReadableTime(
    arrivalDate
  )}`;
};

// Get travel duration
export const getReadableDuration = (segment: Segment): string => {
  let minutesTotal = segment.duration;
  const days = Math.floor(minutesTotal / (60 * 24));

  if (days) {
    minutesTotal -= days * 60 * 24;
  }

  const hours = Math.floor(minutesTotal / 60);

  let minutes = minutesTotal % 60;
  const result = [];

  if (days) result.push(`${days}д`);
  if (hours) result.push(`${hours}ч`);
  if (minutes) result.push(`${minutes}м`);

  return result.join(" ");
};

/*
  Returns number of transfers as a Russian sentence
  e.g.: 0 stops => прямой рейс
        1 stop => 1 пересадка
*/
export const numberOfTransfersRussian = (segment: Segment): string => {
  // if (segment.stops in pluralForms) return pluralForms[segment.stops];
  switch (segment.stops.length) {
    case 0:
      return "прямой рейс";
    case 1:
      return "1 пересадка";
    case 2:
      return "2 пересадки";
    case 3:
      return "3 пересадки";
    case 4:
      return "4 пересадки";
    default:
      return segment.stops + " пересадок";
  }
};

/*
 adds space between thousands and hundreds, to make reading number easier
 for example, 123456 becomes '123 456'
*/
const splitNumber = (number: number): string => {
  const stringified = String(number);
  const hundreds = stringified.slice(-3);
  const thousands = stringified.slice(-6, -3);

  return [thousands, hundreds].join(" ");
};

const CURRENCY_SYMBOL = "Р";
/*
  Returns formated price string with currency symbol added
 */
export const priceString = (price: number): string =>
  splitNumber(price) + " " + CURRENCY_SYMBOL;
