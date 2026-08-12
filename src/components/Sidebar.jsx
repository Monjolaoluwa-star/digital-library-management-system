import "./Sidebar.css";

import { FaSearch } from "react-icons/fa";


function Sidebar({
  searchText,
  setSearchText,
  selectedCategories,
  setSelectedCategories,
}) {

  const categories = [
    "Programming",
    "Computer",
    "Science",
    "Business",
    "History",
    "Biography",
    "Fiction",
    "Education",
  ];


  const newBookCategories = [
    "Classics",
    "Nigerian",
    "Business",
    "Technology",
    "Mystery",
    "Fantasy",
    "History",
    "Biography",
  ];


  const handleCategoryChange = (category) => {

    setSelectedCategories((currentCategories) => {

      if (
        currentCategories.includes(category)
      ) {

        return currentCategories.filter(
          (item) => item !== category
        );

      }

      return [
        ...currentCategories,
        category,
      ];

    });

  };


  return (

    <aside className="sidebar">

      <div className="sidebar-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search books, authors..."
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

      </div>


      <div className="sidebar-section">

        <h4>Book Categories</h4>

        {categories.map((category) => (

          <label key={category}>

            <input
              type="checkbox"
              checked={
                selectedCategories.includes(category)
              }
              onChange={() =>
                handleCategoryChange(category)
              }
            />

            <span>{category}</span>

          </label>

        ))}

      </div>


      <div className="sidebar-section">

        <h4>New Books Categories</h4>

        {newBookCategories.map((category) => (

          <label key={category}>

            <input
              type="checkbox"
              checked={
                selectedCategories.includes(category)
              }
              onChange={() =>
                handleCategoryChange(category)
              }
            />

            <span>{category}</span>

          </label>

        ))}

      </div>

    </aside>
  );
}


export default Sidebar;