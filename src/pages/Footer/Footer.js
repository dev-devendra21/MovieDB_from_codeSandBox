import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <ul className="nav-link-mobile-container">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-mobile-nav-link mobile-nav-link" : "mobile-nav-link"
                    }
                >
                    <li>Popular</li>
                </NavLink>
                <NavLink
                    to="top-rated"
                    className={({ isActive }) =>
                        isActive ? "active-mobile-nav-link mobile-nav-link" : "mobile-nav-link"
                    }
                >
                    <li>Top Rated</li>
                </NavLink>
                <NavLink
                    to="upcoming"
                    className={({ isActive }) =>
                        isActive ? "active-mobile-nav-link mobile-nav-link" : "mobile-nav-link"
                    }
                >
                    <li>Upcoming</li>
                </NavLink>
            </ul>
        </footer>
    )
}

export default Footer