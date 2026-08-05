// SearchBar receives two props:
// 1. searchText -> the current text in the input
// 2. setSearchText -> a function to update the text

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by title or author..."

      // The value shown inside the input
      value={searchText}

      // Runs every time the user types
      onChange={(event) => setSearchText(event.target.value)}
    />
  );
}

export default SearchBar;