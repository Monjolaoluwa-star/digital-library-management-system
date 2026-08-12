import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BookCard from "../components/BookCard";

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

  const [selectedGenre, setSelectedGenre] =
    useState("");

  const [sortOption, setSortOption] =
    useState("default");

  const displayedBooks = useMemo(() => {
    let result = [...libraryBooks];

    const search = searchText
      .toLowerCase()
      .trim();

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

    if (selectedGenre) {
      result = result.filter(
        (book) =>
          book.genre === selectedGenre
      );
    }

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
          {displayedBooks.length} Books
        </div>

      </div>

      <div className="controls">

        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

        <select
          value={selectedGenre}
          onChange={(event) =>
            setSelectedGenre(event.target.value)
          }
        >
          <option value="">
            All Genres
          </option>

          {genres.map((genre) => (
            <option
              key={genre}
              value={genre}
            >
              {genre}
            </option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>

          <option value="title-asc">
            Title A-Z
          </option>

          <option value="title-desc">
            Title Z-A
          </option>

          <option value="year-new">
            Newest
          </option>

          <option value="year-old">
            Oldest
          </option>
        </select>

      </div>

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
            <h2>No books found 📚</h2>

            <p>
              Try another search or filter.
            </p>
          </div>
        )}

      </div>

    </main>
  );
}

export default BrowseBooks;