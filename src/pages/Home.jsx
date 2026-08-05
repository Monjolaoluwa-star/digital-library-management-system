import "./Home.css";

import BookSlider from "../components/BookSlider";
import Sidebar from "../components/Sidebar";
import FeaturedBooks from "../components/FeaturedBooks";
import BookGrid from "../components/BookGrid";

function Home() {
  return (
    <div className="home">
      <BookSlider />

      <div className="main-content">
        <Sidebar />

        <div className="books-content">
          <FeaturedBooks />
          <BookGrid />
        </div>
      </div>
    </div>
  );
}

export default Home;