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

*(Insert homepage screenshot here)*

---

## Notice Details

*(Insert notice details screenshot here)*

---

## Event Details

*(Insert event details screenshot here)*

---

## Dark Mode

*(Insert dark mode screenshot here)*

---

# 🌍 Deployment

Live Demo:

```
https://your-netlify-link.netlify.app
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
