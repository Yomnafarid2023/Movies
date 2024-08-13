import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/AboutPage";
import Home from "./Components/Home";
import Error from "./Pages/ErrorPage";
import MoviesPage from "./Pages/MoviesPage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import HomePage from "./Pages/HomePage";
import FavoritePage from "./Pages/FavoritePage";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/movies",
          element: <MoviesPage></MoviesPage>,
        },
        {
          path: "/moviesDetails/:movieID",
          element: <MovieDetailPage></MovieDetailPage>,
        },
        {
          index: true,
          element: <HomePage></HomePage>,
        },
        {
          path: "/favorite",
          element: <FavoritePage></FavoritePage>,
        },
        {
          path: "/ProfilePage",
          element: <ProfilePage></ProfilePage>,
        },
      ],
    },
    {
      path: "/LoginPage",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/SignupPage",
      element: <SignupPage></SignupPage>,
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
