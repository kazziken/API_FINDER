import React from "react";
// import Card from 'react-bootstrap/Card'

function ApiCard({api}) {
    const {name,link,category,image,description} = api
    
    //create a ratings button using state?

    function handleClick(){
      console.log('Robert was here')
    }
    
    return (
        <div>
            <li className="card" onClick={handleClick}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>Description: {description}</p>
              <p>Category: {category}</p>
          </li>
        </div>
      );
}

export default ApiCard;