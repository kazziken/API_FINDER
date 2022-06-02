import React from 'react';
import {NavLink} from "react-router-dom"

function Home(){
    return (
    <div class="fade-in-image">
        <NavLink to="/All">
            <img src="https://i.imgur.com/nxvth1E.png" alt="Home Page"></img>
            </NavLink>
    </div>
    )
}

export default Home;