import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Jumbotron } from "./migration";

const achievements = [
  { title: "Best Paper Award", description: "Received Best Paper Award in MIND 2024." },
  { title: "Best General Secretary", description: "Best General Secretary Award for tenure 2023-2024 at IIT Guwahati." },
  { title: "Session Chair", description: "Session Chair in 6th International Conference on MIND 2024." },
  { title: "Micro Mentoring Volunteer", description: "Volunteer in Micro Mentoring program at ICASSP 2025." },
  { title: "Student Meet Experts Volunteer", description: "Volunteer in Student Meet Experts at ISCA (Interspeech 2025)." },
];

const Achievements = (ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  
  const bgStyle = { backgroundColor: "rgb(233, 236, 239)" };

  return (
   <Jumbotron fluid  ref={skillsTabRef} className="m-0" id="achievements"> 
    <Container style={bgStyle} ref={skillsTabRef}  className="text-center py-5">
      <h2 ref={skillsTabRef} className="display-4 pb-3">Achievements</h2>
      <Row className="justify-content-center">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-lg rounded text-center p-3 m-2" style={{ width: "18rem" , backgroundColor:"#E3F2FD"}}>
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

export default Achievements;
