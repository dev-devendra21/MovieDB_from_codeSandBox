import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSearch, setCurrentPage } from "../../store/searchSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";

import Content from "../../components/Content/Content";

function Search() {
    const dispatch = useDispatch();
    const { data, status, currentPage } = useSelector((state) => state.search);

    useEffect(() => {
        dispatch(fetchSearch());
    }, [dispatch]);

    const handlePageChange = (pageNo) => {
        dispatch(setCurrentPage(pageNo))
        dispatch(fetchSearch())
    }

    let content;

    if (status === APISTATUS.LOADING) {
        content = <Loader />;
    }

    if (status === APISTATUS.ERROR) {
        content = <p> ERROR </p>;
    }

    if (status === APISTATUS.IDLE) {
        content = <Content data={data} title="Searched Movies" handlePageChange={handlePageChange} page={currentPage} totalPages={data.total_pages} />;
    }
    return (
        <>
            {content}
        </>
    );
}

export default Search






