import "./BookSlider.css";
import BookCard from "./BookCard";

import deepWork from "../assets/deep work.jpg";
import atomic from "../assets/atomic.jpg";
import cleanCode from "../assets/clean code.jpg";

function BookSlider() {
  return (
    <section className="book-slider">
      <BookCard
        image={deepWork}
        title="Explore Books"
        description="Browse books by title, author or genre. Borrow and manage your reading with ease."
        color="#6E8DA7"
      />

      <BookCard
        image={atomic}
        title="Atomic Habits"
        description="A practical guide to building good habits and breaking bad ones."
        color="#735197"
      />

      <BookCard
        image={cleanCode}
        title="Clean Code"
        description="Learn the principles of writing clean, maintainable code."
        color="#965774"
      />
    </section>
  );
}

export default BookSlider;