import heroImage from "../assets/deep work.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Great Read</h1>

        <p>
          Explore thousands of books across different genres and borrow your
          favorites with ease.
        </p>

        <button>Browse Books</button>
      </div>

      <div className="hero-image">
       <img src={heroImage} alt="Featured Books" />
      </div>
    </section>
  );
}

export default Hero;