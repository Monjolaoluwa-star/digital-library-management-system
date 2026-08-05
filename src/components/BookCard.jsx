import "./BookCard.css";

function BookCard({ image, title, description, color }) {
  return (
    <div className="book-card">

      <div className="book-cover">
        <img src={image} alt={title} />
      </div>

      <div
        className="book-content"
        style={{ backgroundColor: color }}
      >
        <h3>{title}</h3>

        <p>{description}</p>

        <button>View Details</button>

      </div>

    </div>
  );
}

export default BookCard;