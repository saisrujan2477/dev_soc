import { Link } from "react-router-dom";

import {
FaCalendarAlt,
FaMapMarkerAlt
} from "react-icons/fa";

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`} className="card-link">

      <div className="card">

        


        <h3>{event.title}</h3>

        
        <p>
          <FaMapMarkerAlt /> {event.venue}
        </p>

        <p>
          <FaCalendarAlt /> {event.date}
        </p>

        <button className="view-btn">
          View Details →
        </button>

      </div>

    </Link>
  );
}

export default EventCard;