import { Link } from "react-router-dom";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

function NoticeCard({ notice }) {
  return (
    <Link to={`/notice/${notice.id}`} className="card-link">
      <div className="card">

        <h3>{notice.title}</h3>

        <p>
          <FaTag /> {notice.category}
        </p>

        <p>
          <FaCalendarAlt /> {notice.date}
        </p>

        <button className="view-btn">
          View Details →
        </button>

      </div>
    </Link>
  );
}

export default NoticeCard;