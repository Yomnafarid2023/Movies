import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import BasicMenu from "./MUI Components/MuiMenu";



const NavBar = () => {
  const counter = useSelector((state)=>state.counter.counter)
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/favorite">
        Favorites
        <Badge badgeContent={counter} color="error" >
          <FavoriteIcon sx={{fontSize:20, margin:0.5}}></FavoriteIcon>
        </Badge>
      </Link>
      <BasicMenu></BasicMenu>
    </div>
  );
};

export default NavBar;
