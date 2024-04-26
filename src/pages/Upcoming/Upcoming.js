import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUpcoming, setCurrentPage } from "../../store/upcomingSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";


import Content from "../../components/Content/Content";


const Upcoming = () => {
    const dispatch = useDispatch();
    const { data, status, currentPage } = useSelector((state) => state.upcoming);


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
        content = <Content data={data} title="Upcoming Movies" handlePageChange={handlePageChange} page={currentPage} totalPages={data.total_pages} />;
    }
    return (
        <>
            {content}
        </>
    );
};

export default Upcoming;


