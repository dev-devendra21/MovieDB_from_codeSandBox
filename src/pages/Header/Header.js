import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => (
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
          <input type="search" className="search-input" />
          <button type="button" className="search-btn">
            Search
          </button>
        </div>
      </nav>

    </header>
  </>
);

export default Header;
