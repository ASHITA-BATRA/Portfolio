import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";


const MentorCard = ({ mentor }) => {
  return (
    <Card  className="text-center shadow-sm p-3 mb-4 rounded" style={{backgroundColor:"#E3F2FD"}}>
      <Card.Img
        variant="top"
        src={mentor.photo}
        alt={mentor.name}
        className="mentor-img"
        style={{width:"200px",height:"200px",borderRadius:"50%",margin:"0 auto"}}
      />
      <Card.Body>
        <Card.Title className="font-weight-bold">{mentor.name}</Card.Title>
        <Card.Text>{mentor.description}</Card.Text>
        <Button variant="primary" href={mentor.profileUrl} target="_blank">
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
};


const mentors = [
  {
    name: "Prof. Pradip K. Das",
    description: "Professor - Department of Computer Science & Engineering",
    photo: "https://www.iitg.ac.in/pkdas/img/profile.jpg",
    profileUrl: "https://www.iitg.ac.in/pkdas/",
  },
  {
    name: "Neeraj Kumar Sharma",
    description: "Assistant Professor - Mehta Family School of Data Science and Artificial Intelligence",
    photo: "https://www.iitg.ac.in/storage/faculty/5414neeraj_sharma.jpg",
    profileUrl: "https://www.iitg.ac.in/iitg_faculty_details?fac=OTFpeUZVUUcwelVhaUxjamp4QWtIZz09 ",
  },
];

const Mentors = ({ heading }) => {
  return (
    <Jumbotron fluid id="mentors" className="m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">Meet the Mentors</h2>
        <Row className="d-flex flex-wrap justify-content-center">
          {mentors.map((mentor, index) => (
              <div key={`mentor-${index}`} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                    <MentorCard  mentor={mentor} />
              </div>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Mentors;
