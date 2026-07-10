import { useParams, Link } from "react-router-dom";
import events from "../data/events";

function EventDetail() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <h2>Event not found.</h2>;
  }

  return (
    <div className="container">
      <Link to="/">← Back to Home</Link>

      <h1>{event.title}</h1>

        <img
        src={event.image}
        alt={event.title}
        className="detail-image"
        />

      <p>
        <strong>Venue:</strong> {event.venue}
      </p>

      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <hr />

      <p>{event.content}</p>
    </div>
  );
}

export default EventDetail;