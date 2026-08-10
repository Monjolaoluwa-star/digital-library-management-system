import "./BookSlider.css";
import { Link } from "react-router-dom";

import deepWork from "../assets/deep work.jpg";
import atomicHabits from "../assets/atomic.jpg";
import cleanCode from "../assets/clean code.jpg";

function BookSlider() {
  const books = [
    {
      image: deepWork,
      title: "Explore Books",
      description:
        "Browse a large library of books from different authors and genres.",
      button: "Browse Books",
      link: "/browse",
    },

    {
      image: atomicHabits,
      title: "Atomic Habits",
      description:
        "A practical guide to building good habits and breaking bad ones.",
      button: "View Details",
      link: "/books/2",
    },

    {
      image: cleanCode,
      title: "Clean Code",
      description:
        "Learn principles of writing clean and maintainable software.",
      button: "View Details",
      link: "/books/3",
    },
  ];

  return (
    <section className="book-slider">

      <div className="slider-wrapper">

        {books.map((book, index) => (
          <div className="slide-card" key={index}>

            <img
              src={book.image}
              alt={book.title}
            />

            <div className="book-info">

              <h3>{book.title}</h3>

              <p>{book.description}</p>

              <Link
                to={book.link}
                className="slider-button"
              >
                {book.button}
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default BookSlider;