import React from "react";
import {NavLink} from "react-router-dom"

function Header({selectedCategory, cardsToDisplay}){
    const [selectedCategory, setSelectedCategory] = useState([])


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
                <button onClick={() => cardsToDisplay("Arts and Culture")}>Arts and Culture</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Travel")}>Travel</button>
            </li>
            <li>
                <button name onClick={() => cardsToDisplay("Sports")}>Sports</button>
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