import React, {useState} from "react";
import {NavLink} from "react-router-dom"

function Header({handleFilter}){



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
                <button onClick={() => handleFilter("Arts and Culture")}>Arts and Culture</button>
            </li>
            <li>
                <button onClick={() => handleFilter("Travel")}>Travel</button>
            </li>
            <li>
                <button onClick={() => handleFilter("Sports")}>Sports</button>
            </li>
            <li>
                <button onClick={() => handleFilter("Finance")}>Finance</button>
            </li>
            <li>
                <NavLink to="/Form">Submit New Api</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Header;