import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContextProvider";
import "../Styles/Details.css";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/Slices/MoviesSlice";
import SimpleBackdrop from "./Spinner";
import Error from "../Pages/ErrorPage";

const MoviesDetails = () => {
  const movies = useSelector((state) => state.movies.movies);
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState({});
  const isLoading = useSelector((state) => state.movies.isloading);
  const isError = useSelector((state) => state.movies.error);

  const movieObj =movies.find((m) => m.id === +movieID)
  useEffect(() => {
    dispatch(movieAction());
  }, []);

  useEffect(() => {
    setSelectedMovie(movieObj);
  }, []);


  const imgPath = "https://image.tmdb.org/t/p/w500/";

  if (isLoading) return <SimpleBackdrop></SimpleBackdrop>;
  if (isError) return <Error></Error>;

  return (
    <div className="movie-details-container">
      <div key={selectedMovie.id}>
        <h1>Details of {selectedMovie.title}</h1>
        <img
          src={imgPath + selectedMovie.poster_path}
          alt={selectedMovie.title}
          style={{ width: "200px" }}
        />
        <p>
          <h3>Movie release overview :</h3> {selectedMovie.overview}
        </p>
        <p>
          <h3>Movie original title :</h3> {selectedMovie.original_title}
        </p>
      </div>
    </div>
  );
};

export default MoviesDetails;
