import{ createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const  MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
      .then((res) => setMovies(res.data.results));
  }, []);

  const selectMovie = (movieID) => {
    const movie = movies.find((m) => m.id === +movieID);
    setSelectedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie, selectMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MoviesContextProvider;