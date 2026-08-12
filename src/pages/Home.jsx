import { useState } from "react";
import "./Home.css";

import BookSlider from "../components/BookSlider";
import Sidebar from "../components/Sidebar";
import FeaturedBooks from "../components/FeaturedBooks";

import books from "../data/books";

function Home() {
  const [searchText, setSearchText] = useState("");

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  // The Home page uses books 4 - 13
  // for the Featured Books section.
  const featuredBooks = books.slice(3, 13);

  const filteredBooks = featuredBooks.filter((book) => {
    const search = searchText
      .toLowerCase()
      .trim();

    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.genre);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">

      <BookSlider />

      <div className="main-content">

        <Sidebar
          searchText={searchText}
          setSearchText={setSearchText}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <div className="books-content">

          <FeaturedBooks
            booksToShow={filteredBooks}
          />

        </div>

      </div>

    </div>
  );
}

export default Home;