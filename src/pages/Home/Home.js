import PopularMovies from "../Popular/Popular";
import SearchMovies from "../Search/Search";

import { useSelector } from "react-redux";

const Home = () => {
  const { searchTerm } = useSelector((state) => state.search);
  return (
    <div>
      {searchTerm ? <SearchMovies /> : <PopularMovies />}
    </div>
  )
};

export default Home;
