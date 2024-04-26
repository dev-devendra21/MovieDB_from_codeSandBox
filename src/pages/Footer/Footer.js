import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdUpcoming } from "react-icons/md";
import { FaFire, FaHome } from "react-icons/fa";

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
                    <li className='nav-list'><FaHome className='nav-icon' /><p>Popular</p></li>
                </NavLink>
                <NavLink
                    to="top-rated"
                    className={({ isActive }) =>
                        isActive ? "active-mobile-nav-link mobile-nav-link" : "mobile-nav-link"
                    }
                >
                    <li className='nav-list'><FaFire className='nav-icon' /><p>Top Rated</p></li>
                </NavLink>
                <NavLink
                    to="upcoming"
                    className={({ isActive }) =>
                        isActive ? "active-mobile-nav-link mobile-nav-link" : "mobile-nav-link"
                    }
                >
                    <li className='nav-list'><MdUpcoming className='nav-icon' /><p>Upcoming</p></li>
                </NavLink>
            </ul>
        </footer>
    )
}

export default Footer