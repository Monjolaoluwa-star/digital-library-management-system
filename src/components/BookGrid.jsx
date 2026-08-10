import "./BookGrid.css";
import { Link } from "react-router-dom";

import thingsFallApart from "../assets/things fall apart.jpg";
import pragmatic from "../assets/pragmatic.jpg";
import richDad from "../assets/rich dad.jpg";
import psychology from "../assets/the psychology of money.jpg";
import educated from "../assets/educated.jpg";
import fisherman from "../assets/image 11.png";
import harryPotter from "../assets/image 8.png";
import murder from "../assets/murderoftheorient.jpg";
import pride from "../assets/pride.jpg";
import purpleHibiscus from "../assets/purple hibiscus.jpg";

const books = [
  {
    id: 1,
    title: "Things Fall Apart",
    image: thingsFallApart,
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    image: pragmatic,
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    image: richDad,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    image: psychology,
  },
  {
    id: 5,
    title: "Educated",
    image: educated,
  },
  {
    id: 6,
    title: "The Fishermen",
    image: fisherman,
  },
  {
    id: 7,
    title: "Harry Potter",
    image: harryPotter,
  },
  {
    id: 8,
    title: "Murder on the Orient Express",
    image: murder,
  },
  {
    id: 9,
    title: "Pride and Prejudice",
    image: pride,
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    image: purpleHibiscus,
  },
];

function BookGrid() {
  return (
    <section className="book-grid">
      {books.map((book) => (
        <Link
          key={book.id}
          to={`/books/${book.id}`}
          className="book-grid-link"
        >
          <div className="book-grid-item">
            <img
              src={book.image}
              alt={book.title}
            />
          </div>
        </Link>
      ))}
    </section>
  );
}

export default BookGrid;