import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Movies For You</h1>
      <p>Get Ready For Amazing Trial In Movies World</p>
      <Link to="/movies">
      <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
