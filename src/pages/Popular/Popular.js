import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopular } from "../../store/popularSlice";
import { APISTATUS } from "../../utils/constant";

const Popular = () => {
  const dispatch = useDispatch();
  const { data: popular, status } = useSelector((state) => state.popular);
  const { results } = popular;
  console.log(results);
  useEffect(() => {
    dispatch(fetchPopular({ page: 1 }));
  }, []);

  let content;

  if (status === APISTATUS.LOADING) {
    content = <p> Loading... </p>;
  }

  if (status === APISTATUS.ERROR) {
    content = <p> ERROR </p>;
  }

  if (status === APISTATUS.IDLE) {
    content = (
      <>
        <h1>Popular Movies</h1>
        <ul className="card-list-container">
          {results?.map((movie) => (
            <Card
              key={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </ul>
      </>
    );
  }
  return <>{content}</>;
};

export default Popular;
