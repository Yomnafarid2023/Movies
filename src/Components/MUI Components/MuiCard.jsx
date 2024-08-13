import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../Redux/Slices/FavoriteSlice";
import { decCounter, incCounter } from "../../Redux/Slices/CounterSlice";

export default function RecipeReviewCard({ movie, imgPath }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const counter = useSelector((state) => state.counter.counter);
  const dispatchFav = useDispatch();
  // console.log(movie);
  const [isFav, setIsFav] = React.useState(favorites.includes(movie));

  const handleFavorites = () => {
    if (isFav) {
      dispatchFav(removeFromFav(movie));
      dispatchFav(decCounter());
      setIsFav(false);
    } else {
      dispatchFav(addToFav(movie));
      dispatchFav(incCounter());
      setIsFav(true);
    }
  };

  // console.log(counter);
  return (
    <>
      <Card
        sx={{
          width: "300px",
          backgroundColor: "black",
          color: "white",
          height: "450px",
          borderRadius: "30px",
        }}
      >
        <Link
          to={`/moviesDetails/${movie.id}`}
          key={movie.id}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="300px"
            image={imgPath + movie.poster_path}
            alt="Paella dish"
            style={{ objectFit: "contain" }}
          />
        </Link>
        <CardContent>
          <Typography variant="body2" fontSize={"1rem"}>
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleFavorites}>
            <FavoriteBorderOutlinedIcon
              sx={{ color: isFav ? "red" : "grey", fontSize: 40 }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
