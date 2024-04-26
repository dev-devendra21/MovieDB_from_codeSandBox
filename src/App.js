import Home from "./pages/Home/Home";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";


import Layout from "./pages/Layout";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />
      }
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
