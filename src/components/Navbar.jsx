import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🎓 Campus Connect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#notices">Notices</a>
        <a href="#events">Events</a>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;