import workshop from "/src/assets/events/Workshop.jpg";
import hackathon from "/src/assets/events/Hackathon.jpg";
import football from "/src/assets/events/Football.webp";

const events = [
  {
    id: 1,
    title: "AI Workshop",
    venue: "Nalanda Complex",
    date: "18 July 2026",
    image: workshop,
    content:
      "Hands-on workshop introducing Machine Learning and Artificial Intelligence."
  },
  {
    id: 2,
    title: "Hackathon",
    venue: "Technology Students' Gymkhana",
    date: "20 July 2026",
    image: hackathon,
    content:
      "24-hour coding competition open to all departments."
  },
  {
    id: 3,
    title: "Football Tournament",
    venue: "Main Ground",
    date: "22 July 2026",
    image: football,
    content:
      "Inter-hall football championship begins this week."
  }
];

export default events;