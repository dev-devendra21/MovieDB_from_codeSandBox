import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUpcoming, setCurrentPage } from "../../store/upcomingSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";
import { setSearchTerm } from "../../store/searchSlice";


import Content from "../../components/Content/Content";
import Error from "../../components/Error/Error";


const Upcoming = () => {
    const dispatch = useDispatch();
    const { data, status, currentPage } = useSelector((state) => state.upcoming);


    useEffect(() => {
        dispatch(fetchUpcoming());
        dispatch(setSearchTerm(""));
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
        content = <Error />;
    }

    if (status === APISTATUS.IDLE) {
        content = <Content data={data} title="Upcoming Movies" handlePageChange={handlePageChange} page={currentPage} totalPages={data?.total_pages} />;
    }
    return (
        <>
            {content}
        </>
    );
};

export default Upcoming;


