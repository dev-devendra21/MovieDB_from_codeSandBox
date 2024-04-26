import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopular } from "../../store/popularSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";

import { setCurrentPage } from "../../store/popularSlice";

import "./Popular.css";
import Pagination from "../../components/Pagination/Pagination";

const Popular = () => {
  const dispatch = useDispatch();
  const { data: popular, status, currentPage, totalPages } = useSelector((state) => state.popular);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const handlePageChange = (pageNo) => {
    dispatch(setCurrentPage(pageNo))
    dispatch(fetchPopular())
  }

  let content;

  if (status === APISTATUS.LOADING) {
    content = <Loader />;
  }

  if (status === APISTATUS.ERROR) {
    content = <p> ERROR </p>;
  }

  if (status === APISTATUS.IDLE) {
    content = (
      <div className="popular-container">
        <h1 className="popular-header">Popular Movies</h1>
        <ul className="card-list-container">
          {popular.results?.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </ul>
        <Pagination page={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    );
  }
  return (
    <>
      {content}
    </>
  );
};

export default Popular;
