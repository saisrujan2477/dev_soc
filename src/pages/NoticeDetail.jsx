import { useParams, Link } from "react-router-dom";
import notices from "../data/notices";

function NoticeDetail() {
  const { id } = useParams();

  const notice = notices.find((n) => n.id === Number(id));

  if (!notice) {
    return <h2>Notice not found.</h2>;
  }

  return (
    <div className="container">
      <Link to="/">← Back to Home</Link>

      <h1>{notice.title}</h1>

        <img
        src={notice.image}
        alt={notice.title}
        className="detail-image"
        />

      <p>
        <strong>Category:</strong> {notice.category}
      </p>

      <p>
        <strong>Date:</strong> {notice.date}
      </p>

      <hr />

      <p>{notice.content}</p>
    </div>
  );
}

export default NoticeDetail;