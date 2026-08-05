// This component lets the user choose how to sort the books.

function SortDropdown({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(event) => setSortOption(event.target.value)}
    >
      <option value="A-Z">A - Z</option>
      <option value="Z-A">Z - A</option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </select>
  );
}

export default SortDropdown;