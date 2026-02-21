const events = [
  {
    id: 1,
    title: "Волейбол: ЦСКА — Черно море",
    date: "2026-03-20",
    displayDate: "20 Март 2026",
    time: "18:30",
    place: "Спортна зала Варна",
    price: "15 лв",
    type: "volleyball",
    teams: { home: "ЦСКА", away: "Черно море" },
    link: "../HTML/event.html",
    description: "Турнирна среща."
  },
  {
    id: 2,
    title: "Баскетбол: Левски — Черно море",
    date: "2026-03-12",
    displayDate: "12 Март 2026",
    time: "19:00",
    place: "Зала Конгресна",
    price: "20 лв",
    type: "basketball",
    teams: { home: "Левски", away: "Черно море" },
    link: "../HTML/event_basketball.html",
    description: "Двубой от националното първенство."
  },
  {
    id: 3,
    title: "Концерт: Криско",
    date: "2026-04-05",
    displayDate: "5 Април 2026",
    time: "20:00",
    place: "Открита сцена Варна",
    price: "40 лв",
    type: "concert",
    link: "../HTML/event_krisko.html",
    description: "Криско изнася вечер с най-големите си хитове."
  }
];

export default events;
