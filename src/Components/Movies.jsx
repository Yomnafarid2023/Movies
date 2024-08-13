import { useEffect } from "react";
import "../Styles/Movies.css";
import Card from "./MUI Components/MuiCard";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "../Redux/Slices/MoviesSlice";
import SimpleBackdrop from "./Spinner";
import Error from '../Pages/ErrorPage';

const Movies = () => {

  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isloading);
  const isError = useSelector((state) => state.movies.error);

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);

  if (isLoading) return <SimpleBackdrop></SimpleBackdrop>;
  if (isError) return <Error></Error>

  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"50px"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={"30px"}
      >
        {movies?.map((resObj) => (
          <Card movie={resObj} imgPath={imgPath} key={resObj.id}></Card>
        ))}
      </Box>
    </>
  );
};

export default Movies;
