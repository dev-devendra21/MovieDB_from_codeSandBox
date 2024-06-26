import { useRef } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchSearch, setSearchTerm, setCurrentPage } from "../../store/searchSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const searchQuery = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchInput = () => {
    const query = searchQuery.current.value;
    dispatch(setSearchTerm(query));
    dispatch(setCurrentPage(1));
    dispatch(fetchSearch());
    navigate("/");
    searchQuery.current.value = "";
  }
  return (
    <>
      <header className="nav-bar">
        <nav>
          <h1 className="nav-logo">MovieDB</h1>
        </nav>
        <nav className="nav-link-and-search-container">
          <ul className="nav-link-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-nav-link nav-link" : "nav-link"
              }
            >
              <li>Popular</li>
            </NavLink>
            <NavLink
              to="top-rated"
              className={({ isActive }) =>
                isActive ? "active-nav-link nav-link" : "nav-link"
              }
            >
              <li>Top Rated</li>
            </NavLink>
            <NavLink
              to="upcoming"
              className={({ isActive }) =>
                isActive ? "active-nav-link nav-link" : "nav-link"
              }
            >
              <li>Upcoming</li>
            </NavLink>
          </ul>
          <div>
            <input placeholder="Movie Name" onKeyDown={(e) => e.key === "Enter" && handleSearchInput()} type="search" ref={searchQuery} className="search-input" />
            <button onClick={handleSearchInput} type="button" className="search-btn">
              Search
            </button>
          </div>
        </nav>

      </header>
    </>
  )
};

export default Header;
