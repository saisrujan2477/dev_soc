import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoticeCard from "../components/NoticeCard";
import EventCard from "../components/EventCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import notices from "../data/notices";
import events from "../data/events";


function Home() {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Category filter state
  const [category, setCategory] = useState("All");

  // Loading and Error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
    });

  // Simulate loading
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const fetchFailed = false; // Change to true to test error state

      if (fetchFailed) {
        setError(true);
      }

      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  // Show loading screen
  if (loading) {
    return <Loading />;
  }

  // Show error screen
  if (error) {
    return <Error message="Failed to load data." />;
  }

  // Filter notices
  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || notice.category === category;

    return matchesSearch && matchesCategory;
  });

  

  // Filter events
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container">
        <div className="hero">
            <h1>Campus Events & Notices Dashboard</h1>

            <p>
                Stay informed about the latest campus notices, events, workshops,
                competitions and announcements.
            </p>
        </div>

        {/* Search Box */}
        
        <div className="search-filter">

        <input
        type="text"
        placeholder="🔍 Search notices or events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
        />

        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter"
        >
        <option>All Categories</option>
        <option>Academic</option>
        <option>General</option>
        <option>Scholarship</option>
        </select>

        </div>

        {/* Notices */}
        <h2 id="notices">Latest Notices</h2>

        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))
        ) : (
          <p>No notices found.</p>
        )}

        {/* Events */}
        <h2 id="events">Upcoming Events</h2>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>

    <Footer/>
    </>
  );
}

export default Home;