import React from 'react'
import { Card, Button,Container } from 'react-bootstrap';
export default function Projects() {
    const cardsData = [
        {
          title: 'Card 1',
          imageUrl: 'https://placekitten.com/300/200',
          buttonLabel: 'Click Me 1',
        },
        {
          title: 'Card 2',
          imageUrl: 'https://placekitten.com/301/200',
          buttonLabel: 'Click Me 2',
        },
        {
          title: 'Card 3',
          imageUrl: 'https://placekitten.com/302/200',
          buttonLabel: 'Click Me 3',
        },
      ];
    
      return (
        <>
          <Container className="mt-5">
        <h1>My Works</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
          {cardsData.map((card, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Button variant="primary">{card.buttonLabel}</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
         <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
         {cardsData.map((card, index) => (
           <Card key={index} style={{ width: '18rem' }}>
             <Card.Img variant="top" src={card.imageUrl} />
             <Card.Body>
               <Card.Title>{card.title}</Card.Title>
               <Button variant="primary">{card.buttonLabel}</Button>
             </Card.Body>
           </Card>
         ))}
       </div>
       </Container>
       </>
      );
    };
    