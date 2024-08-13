import  { useState, useEffect } from 'react';
import { Button, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const open = Boolean(anchorEl);

  useEffect(() => {
    // Check local storage on component mount
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    handleClose(); // Close the menu after logout
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "rgb(169, 13, 13)" }}></Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/ProfilePage" style={{ textDecoration: 'none' }}>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {isLoggedIn ? (
            <Link to="/LoginPage" style={{ textDecoration: 'none' }} onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/LoginPage" style={{ textDecoration: 'none' }}>
              Login
            </Link>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
}
