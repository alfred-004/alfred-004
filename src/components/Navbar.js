import React from "react";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
             <header>
                <nav>
                    <ul className="nav_links">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/getstarted">GET STARTED</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </nav>
                <button>Login</button>
            </header>
        );
}

export default Navbar;