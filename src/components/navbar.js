import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" >Navbar</NavLink>
            <span>
                <NavLink className="navbar-text" to="/login">Login</NavLink>
            </span>
        </nav>
    );
}

export default NavBar