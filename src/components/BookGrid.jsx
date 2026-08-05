import "./BookGrid.css";

import atomic from "../assets/atomic.jpg";
import cleanCode from "../assets/clean code.jpg";
import deepWork from "../assets/deep work.jpg";
import educated from "../assets/educated.jpg";
import pragmatic from "../assets/pragmatic.jpg";
import pride from "../assets/pride.jpg";
import richDad from "../assets/rich dad.jpg";

const books = [
  atomic,
  cleanCode,
  deepWork,
  educated,
  pragmatic,
  pride,
  richDad,
  atomic,
  cleanCode,
  deepWork,
];

function BookGrid() {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <img key={index} src={book} alt="Book Cover" />
      ))}
    </div>
  );
}

export default BookGrid;