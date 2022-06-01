import React from "react";
import Card from 'react-bootstrap/Card'

function ApiCard({api}) {
    const {name,link,category,image,description} = api
    
    //create a ratings button using state?
    
    return (
        <div>
            <Card className="bg-dark text-white" style={{ width: '50rem' }}>
              <Card.Img src={image} alt={image} />
              <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Link href={link}>{link}</Card.Link>
              </Card.ImgOverlay>
            </Card>
        </div>
      );
}

export default ApiCard;