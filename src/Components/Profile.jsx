import { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem("email");

      if (email) {
        try {
          // Fetch user data based on email
          const response = await axios.get("http://localhost:3000/users");
          const userData = response.data.find(user => user.email === email);

          if (userData) {
            setUser(userData);
          } else {
            setError("User not found.");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to fetch user data.");
        }
      } else {
        setError("No user is logged in.");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    nav("/LoginPage");
  };

  if (error) {
    return (
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
          <Button onClick={handleLogout} variant="contained" sx={{ mt: 3, bgcolor: "rgb(169, 13, 13)" }}>
            Log in
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: "#EEEEEE",
          padding: "30px",
          borderRadius: "30px"
        }}
      >
        {user && (
          <>
            <Avatar sx={{ m: 1, bgcolor: 'rgb(169, 13, 13)' }}>{user.name.charAt(0)}</Avatar>
            <Typography component="h1" variant="h5" fontSize={"2rem"}>
              {user.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Gender:</strong> {user.gender}
            </Typography>
            <Button onClick={handleLogout} variant="contained" sx={{ mt: 3, bgcolor: "rgb(169, 13, 13)" }}>
              Log out
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
