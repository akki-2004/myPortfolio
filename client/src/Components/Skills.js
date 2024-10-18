// App.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skillsData = [
  { title: 'JavaScript', description: 'Front-end development' },
  { title: 'React.js', description: 'Building user interfaces' },
  { title: 'HTML/CSS', description: 'Web design and styling' },
  { title: 'Node.js', description: 'Server-side development' },
  { title: 'Git', description: 'Version control' },
  { title: 'Express Js', description: 'Backend Code ' },
  { title: 'Mongo Db', description: 'Storing Data' },

];

const Skills = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">My Skills</h1>
      <Row>
        {skillsData.map((skill, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
