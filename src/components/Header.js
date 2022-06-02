import React from "react";
import {NavLink} from "react-router-dom"

function Header(){
    return(
    <nav className="nav">
        <a href="/" className="site-title"> 
        API Finder 
        </a>
        <ul>
            <li>
            <NavLink to="/All">All</NavLink>
            </li>
            <li>
                <NavLink to="/ArtsandCulture">Arts and Culture</NavLink>
            </li>
            <li>
                <NavLink to="/Travel">Travel</NavLink>
            </li>
            <li>
                <NavLink to="/Sports">Sports</NavLink>
            </li>
            <li>
                <NavLink to="/Finance">Finance</NavLink>
            </li>
            <li>
                <NavLink to="/Form">Submit New Api</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Header;