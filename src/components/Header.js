import React from "react";

function Header(){
    return(
    <nav className="nav">
        <a href="/" className="site-title"> 
        API Finder 
        </a>
        <ul>
            <li>
                <a href="/ArtsandCulture">Arts and Culture</a>
            </li>
            <li>
                <a href="/Travel">Travel</a>
            </li>
            <li>
                <a href="/Sports">Sports</a>
            </li>
            <li>
                <a href="/Finance">Finance</a>
            </li>
        </ul>
    </nav>
    )
}

export default Header;