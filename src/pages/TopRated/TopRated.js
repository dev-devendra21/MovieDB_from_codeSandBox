import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTopRated } from "../../store/topRatedSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";

import { setCurrentPage } from "../../store/topRatedSlice";

import "./TopRated.css";
import Pagination from "../../components/Pagination/Pagination";

const TopRated = () => {
    const dispatch = useDispatch();
    const { data: topRated, status, currentPage } = useSelector((state) => state.topRated);

    useEffect(() => {
        dispatch(fetchTopRated());
    }, [dispatch]);

    const handlePageChange = (pageNo) => {
        dispatch(setCurrentPage(pageNo));
        dispatch(fetchTopRated())
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
            <div className="topRated-container">
                <h1 className="topRated-header">Top Rated Movies</h1>
                <ul className="card-list-container">
                    {topRated.results?.map((movie) => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            rating={movie.vote_average}
                            poster={movie.poster_path}
                        />
                    ))}
                </ul>
                <Pagination page={currentPage} totalPages={topRated.total_pages} handlePageChange={handlePageChange} />
            </div>
        );
    }
    return (
        <>
            {content}
        </>
    );
};

export default TopRated;

