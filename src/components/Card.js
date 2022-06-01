
import React from "react";

function Card({api}) {
    const {name,link,category,image,description} = api
    
    //create a ratings button using state?
    
    return (
        <div>
          <h3>{name}</h3>
          <p>{link}</p>
          <img src={image} alt={name}/>
          <p>
            <strong>{category}</strong>
          </p>
          <p>{description}</p>
        </div>
      );
}

export default Card;