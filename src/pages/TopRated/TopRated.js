import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTopRated, setCurrentPage } from "../../store/topRatedSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";
import Content from "../../components/Content/Content";
import { setSearchTerm } from "../../store/searchSlice";
import Error from "../../components/Error/Error";

const TopRated = () => {
    const dispatch = useDispatch();
    const { data, status, currentPage } = useSelector((state) => state.topRated);

    useEffect(() => {
        dispatch(fetchTopRated());
        dispatch(setSearchTerm(""));
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
        content = <Error />;
    }

    if (status === APISTATUS.IDLE) {
        content = <Content data={data} title="Top Rated Movies" handlePageChange={handlePageChange} page={currentPage} totalPages={data?.total_pages} />;
    }
    return (
        <>
            {content}
        </>
    );
};

export default TopRated;

