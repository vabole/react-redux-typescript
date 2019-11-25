import { Ticket } from "../../store/tickets/types";

export const tickets: Ticket[] = [
  {
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
  },
  {
    price: 54085,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T02:26:00.000Z",
        stops: ["DXB", "KUL", "SIN"],
        duration: 1106
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T02:56:00.000Z",
        stops: ["AUH", "DXB", "KUL"],
        duration: 1557
      }
    ]
  },
  {
    price: 27098,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T11:23:00.000Z",
        stops: ["IST", "AUH", "SIN"],
        duration: 794
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T11:19:00.000Z",
        stops: ["SIN", "IST", "KUL"],
        duration: 1380
      }
    ]
  },
  {
    price: 30650,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T00:26:00.000Z",
        stops: [],
        duration: 1977
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T02:45:00.000Z",
        stops: ["DXB"],
        duration: 1465
      }
    ]
  },
  {
    price: 63450,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T03:04:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 905
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T03:39:00.000Z",
        stops: ["KUL", "SHA", "AUH"],
        duration: 1915
      }
    ]
  },
  {
    price: 71623,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T14:24:00.000Z",
        stops: ["HKG", "IST", "BKK"],
        duration: 1680
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T11:47:00.000Z",
        stops: [],
        duration: 827
      }
    ]
  },
  {
    price: 55097,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-02T21:01:00.000Z",
        stops: [],
        duration: 1249
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T09:51:00.000Z",
        stops: ["SHA"],
        duration: 1470
      }
    ]
  },
  {
    price: 50349,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T07:42:00.000Z",
        stops: ["SIN"],
        duration: 1554
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-22T23:51:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1127
      }
    ]
  },
  {
    price: 46021,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T09:24:00.000Z",
        stops: ["DXB", "SHA", "SIN"],
        duration: 1827
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T15:43:00.000Z",
        stops: [],
        duration: 1778
      }
    ]
  },
  {
    price: 87756,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-03T07:22:00.000Z",
        stops: ["SHA", "HKG", "DXB"],
        duration: 876
      },
      {
        origin: "MOW",
        destination: "HKT",
        date: "2019-12-23T12:46:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1455
      }
    ]
  }
];
