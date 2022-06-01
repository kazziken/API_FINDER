import React from "react";
import Card from 'react-bootstrap/Card'

function ApiCard({api}) {
    const {name,link,category,image,description} = api
    
    //create a ratings button using state?
    
    return (
        <div>
            <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      
    </li>
        </div>
      );
}

export default ApiCard;