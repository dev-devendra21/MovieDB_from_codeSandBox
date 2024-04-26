import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUpcoming } from "../../store/upcomingSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";

import { setCurrentPage } from "../../store/upcomingSlice";

import "./Upcoming.css";
import Pagination from "../../components/Pagination/Pagination";

const Upcoming = () => {
    const dispatch = useDispatch();
    const { data: upcoming, status, currentPage } = useSelector((state) => state.upcoming);


    useEffect(() => {
        dispatch(fetchUpcoming());
    }, [dispatch]);

    const handlePageChange = (pageNo) => {
        dispatch(setCurrentPage(pageNo));
        dispatch(fetchUpcoming())
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
            <div className="upcoming-container">
                <h1 className="upcoming-header">Upcoming Movies</h1>
                <ul className="card-list-container">
                    {upcoming.results?.map((movie) => (
                        <Card
                            key={movie.id}
                            title={movie.title}
                            rating={movie.vote_average}
                            poster={movie.poster_path}
                        />
                    ))}
                </ul>
                <Pagination page={currentPage} totalPages={upcoming.total_pages} handlePageChange={handlePageChange} />
            </div>
        );
    }
    return (
        <>
            {content}
        </>
    );
};

export default Upcoming;


