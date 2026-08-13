import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BookCard from "../components/BookCard";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import Sidebar from "../components/Sidebar";

import books from "../data/books";

function BrowseBooks({
  libraryBooks = books,
  toggleBorrowStatus,
}) {
  const [searchParams] = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const [searchText, setSearchText] =
    useState(initialSearch);

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedGenre, setSelectedGenre] =
    useState("");

  const [sortOption, setSortOption] =
    useState("default");

  const displayedBooks = useMemo(() => {
    let result = [...libraryBooks];

    const search = searchText
      .toLowerCase()
      .trim();

    /* SEARCH */
    if (search) {
      result = result.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(search) ||
          book.author
            .toLowerCase()
            .includes(search)
      );
    }

    /* SIDEBAR CATEGORY FILTER */
    if (selectedCategories.length > 0) {
      result = result.filter((book) =>
        selectedCategories.includes(book.genre)
      );
    }

    /* DROPDOWN GENRE FILTER */
    if (selectedGenre) {
      result = result.filter(
        (book) =>
          book.genre === selectedGenre
      );
    }

    /* SORTING */
    if (sortOption === "title-asc") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortOption === "title-desc") {
      result.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    if (sortOption === "year-new") {
      result.sort(
        (a, b) => b.year - a.year
      );
    }

    if (sortOption === "year-old") {
      result.sort(
        (a, b) => a.year - b.year
      );
    }

    return result;
  }, [
    libraryBooks,
    searchText,
    selectedCategories,
    selectedGenre,
    sortOption,
  ]);

  const genres = [
    ...new Set(
      libraryBooks.map((book) => book.genre)
    ),
  ];

  return (
    <main className="browse-books">

      <div className="browse-layout">

        {/* SIDEBAR */}
        <div className="browse-sidebar">

          <Sidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={
              setSelectedCategories
            }
            searchText={searchText}
            setSearchText={setSearchText}
          />

        </div>

        {/* MAIN CONTENT */}
        <div className="browse-content">

          {/* HEADER */}
          <div className="browse-header">

            <div>

              <h1 className="browse-title">
                Browse Books
              </h1>

              <p className="browse-subtitle">
                Discover books from different
                authors, genres and categories.
              </p>

            </div>

            <div className="book-count">
              {displayedBooks.length}
              {displayedBooks.length === 1
                ? " Book"
                : " Books"}
            </div>

          </div>


          {/* CONTROLS */}
          <div className="controls">

            <FilterPanel
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />

            <SortDropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

          </div>


          {/* BOOK GRID */}
          <div className="books-grid">

            {displayedBooks.length > 0 ? (

              displayedBooks.map((book) => (

                <BookCard
                  key={book.id}
                  book={book}
                  toggleBorrowStatus={
                    toggleBorrowStatus
                  }
                />

              ))

            ) : (

              <div className="no-books">

                <h2>
                  No books found 📚
                </h2>

                <p>
                  Try searching for another
                  title or choose a different
                  category.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </main>
  );
}

export default BrowseBooks;