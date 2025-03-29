import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Jumbotron } from "./migration";

const achievements = [
  { title: "CS-566", description: "Speech Processing (July 2023 - Nov 2023)" },
  { title: "CS-345", description: "Software Engineering (Jan 2024 - Apr 2024)" },
  { title: "CS-566", description: "Speech Processing (July 2024 - Dec 2024)" },
  { title: "CS-345", description: "Software Engineering (Jan 2025 - Present)" },
  { title: "CS-331", description: "Programming Language Lab (Jan 2023 - Present)" },
];



const TA = () => {
  return (
   <Jumbotron fluid className="bg-light" id="ta"> 
    <Container className="text-center py-5">
      <h2 className="display-4 pb-3">Teaching Assistantship</h2>
      <Row className="justify-content-center">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-lg rounded text-center p-3 m-2" style={{ width: "18rem" , backgroundColor:"#E3F2FD" }}>
            <Card.Body>
              <Card.Title className="h5">{achievement.title}</Card.Title>
              <Card.Text>{achievement.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </Jumbotron>
  );
};

export default TA;
