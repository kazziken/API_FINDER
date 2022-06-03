import React from 'react';
import {NavLink} from "react-router-dom"

function Home({cardsToDisplay}){
    return (
    <div className="fade-in-image">
        <NavLink onClick={() => cardsToDisplay("")} to="/All">
            <img src="https://i.imgur.com/nxvth1E.png" alt="Home Page"></img>
        </NavLink>
    </div>
    )
}

export default Home;