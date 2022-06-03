import React from "react";
import {NavLink} from "react-router-dom"

function Header({cardsToDisplay}){
    return(
    <nav className="nav">
        <a href="/" className="site-title"> 
        API Finder 
        </a>
        <ul>
            <li>
            <button onClick={() => cardsToDisplay("")} to="/All">All</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Arts and Culture")}>Arts and Culture</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Travel")}>Travel</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Sports")}>Sports</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Finance")}>Finance</button>
            </li>
            <li>
                <NavLink to="/Form">Submit New Api</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Header;