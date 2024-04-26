import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopular, setCurrentPage } from "../../store/popularSlice";
import { APISTATUS } from "../../utils/constant";
import Loader from "../../components/Loader/Loader";

import Content from "../../components/Content/Content";


const Popular = () => {
  const dispatch = useDispatch();
  const { data, status, currentPage, totalPages } = useSelector((state) => state.popular);

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
    content = <Content data={data} title="Popular Movies" handlePageChange={handlePageChange} page={currentPage} totalPages={totalPages} />;
  }
  return (
    <>
      {content}
    </>
  );
};

export default Popular;
