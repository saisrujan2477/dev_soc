import registration from "/src/assets/notices/registration.webp";
import library from "/src/assets/notices/library.webp";
import scholarship from "/src/assets/notices/schloarship.webp";

const notices = [
  {
    id: 1,
    title: "Semester Registration Deadline",
    category: "Academic",
    date: "10 July 2026",
    image: registration,
    content:
      "Students must complete semester registration before the deadline through the ERP portal."
  },
  {
    id: 2,
    title: "Library Closed on Sunday",
    category: "General",
    date: "12 July 2026",
    image: library,
    content:
      "The Central Library will remain closed on Sunday due to maintenance work."
  },
  {
    id: 3,
    title: "Scholarship Application Open",
    category: "Scholarship",
    date: "15 July 2026",
    image: scholarship,
    content:
      "Applications for the Merit-cum-Means Scholarship are now open."
  }
];

export default notices;