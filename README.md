# 🎓 Campus Events & Notices Dashboard

A modern, responsive web application built using **React** and **Vite** that allows students to stay updated with the latest campus notices and upcoming events. The dashboard provides an intuitive interface to browse announcements, search for information, filter notices by category, and view detailed information for each notice and event.

---

## 📌 Project Overview

Campus life is filled with important announcements, workshops, competitions, seminars, and events. This project provides a centralized dashboard where students can quickly access all campus-related updates in one place.

The application is designed with a clean and responsive interface that works seamlessly on both desktop and mobile devices.

---

## ✨ Features

### ✅ Notice Feed
- Displays all campus notices.
- Each notice contains:
  - Title
  - Category
  - Posted Date
  - Preview Image
- Clicking a notice opens a detailed page.

### ✅ Event Feed
- Displays all upcoming campus events.
- Each event contains:
  - Title
  - Venue
  - Event Date
  - Preview Image
- Users can navigate to a detailed event page.

### ✅ Detailed View
Each notice and event has its own dedicated page containing:
- Large banner image
- Complete description
- Date
- Category / Venue
- Back navigation to the homepage

### ✅ Search Functionality
Users can search notices and events by entering keywords.

### ✅ Category Filtering
Notices can be filtered by category:
- Academic
- General
- Scholarship
- All Categories

Search and filtering work together simultaneously.

### ✅ Loading State
A loading screen is displayed while data is being fetched (simulated).

### ✅ Error State
Displays an appropriate error message if data loading fails.

### ✅ Responsive Design
Optimized for:
- Desktop
- Tablet
- Mobile devices

### ✅ URL Routing
Implemented using React Router.

Examples:

```
/
```

```
/notice/1
```

```
/event/2
```

### 🌙 Bonus Feature
- Dark Mode
- Theme preference is saved using Local Storage.

---

# 🛠 Tech Stack

- React
- Vite
- React Router DOM
- React Icons
- CSS3
- JavaScript (ES6)

---

# 📂 Folder Structure

```
src
│
├── assets
│   ├── notices
│   └── events
│
├── components
│   ├── Navbar.jsx
│   ├── NoticeCard.jsx
│   ├── EventCard.jsx
│   ├── Footer.jsx
│   ├── Loading.jsx
│   └── Error.jsx
│
├── data
│   ├── notices.js
│   └── events.js
│
├── pages
│   ├── Home.jsx
│   ├── NoticeDetail.jsx
│   └── EventDetail.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd campus-events-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

---

# 🧠 React Concepts Used

This project demonstrates several important React concepts including:

- Functional Components
- Component Reusability
- Props
- State Management using useState
- Side Effects using useEffect
- React Router
- Conditional Rendering
- Dynamic Routing
- Event Handling
- List Rendering using map()
- Filtering Arrays
- Local Storage

---

# 📸 Screenshots

## Home Page

<img width="947" height="458" alt="Screenshot 2026-07-10 151800" src="https://github.com/user-attachments/assets/a13000a5-376d-48b8-9069-65f1e01e948b" />

---

## Notice Details

<img width="935" height="441" alt="Screenshot 2026-07-10 151829" src="https://github.com/user-attachments/assets/c29bd749-413c-4762-a5b1-edf29acf6ca3" />

---

## Event Details

<img width="941" height="428" alt="Screenshot 2026-07-10 151852" src="https://github.com/user-attachments/assets/432af8fe-1775-4267-9151-443d139067e4" />


---

## Dark Mode

<img width="934" height="431" alt="image" src="https://github.com/user-attachments/assets/62a0f285-5f75-42d4-af4c-0206fcceaa69" />


---

# 🌍 Deployment

Live Demo:

```
https://kgp-campus-connect.netlify.app/
```

---

# 🎯 Future Improvements

Possible future enhancements include:

- Backend integration
- User authentication
- Admin dashboard
- Real-time notifications
- Event registration
- Bookmark favourite notices
- Pagination / Infinite scrolling
- Calendar integration
- Push notifications

---

# 📖 Learning Outcomes

Through this project, I learned:

- Building applications using React and Vite
- Managing application state using React Hooks
- Creating reusable UI components
- Implementing client-side routing
- Handling loading and error states
- Designing responsive user interfaces
- Organizing a React project structure
- Using Local Storage for persistent settings

---

# 👨‍💻 Author

**Sai Srujan**

IIT Kharagpur

Civil Engineering

---

# 📄 License

This project was created for educational purposes as part of a web development task submission.
