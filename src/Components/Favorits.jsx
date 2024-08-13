import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "./MUI Components/MuiCard";

const Favorits = () => {
  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  if (favoriteMovies.length > 0) {
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
          {favoriteMovies?.map((resObj) => (
            <Card movie={resObj} imgPath={imgPath} key={resObj.id}></Card>
          ))}
        </Box>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="popcorn.gif"
            alt="popcorn"
            width={300}
            height={300}
            style={{ borderRadius: "30px", marginTop: "10px" }}
          />
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>

        <p style={{ color: "white", fontSize:"2.5rem" }}>
          Start like movies to add to your favorites
        </p>
        </div>
      </>
    );
  }
};

export default Favorits;
