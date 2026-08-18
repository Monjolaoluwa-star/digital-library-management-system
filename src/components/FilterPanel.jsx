function FilterPanel({ selectedGenre, setSelectedGenre }) {
  return (
    <select
      value={selectedGenre}
      onChange={(event) =>
        setSelectedGenre(event.target.value)
      }
    >
      <option value="">All Genres</option>

      <option value="Programming">
        Programming
      </option>

      <option value="Science">
        Science
      </option>

      <option value="History">
        History
      </option>

      <option value="Business">
        Business
      </option>

      <option value="Self Help">
        Self Help
      </option>

      <option value="Productivity">
        Productivity
      </option>
    </select>
  );
}

export default FilterPanel;