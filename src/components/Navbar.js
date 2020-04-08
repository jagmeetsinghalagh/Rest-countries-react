import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Where in the world?</span>
            </Link>
        </nav>
    );
}

export default Navbar;