import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ value }) => {
  const { title, authors, conference, link , color } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 rounded" style={{backgroundColor: color}}>
        <Card.Body>
          <Card.Title as="h5">{title}</Card.Title>
          <Card.Text>
            <strong>Authors:</strong> {authors} <br />
            <strong>Conference:</strong> {conference}
          </Card.Text>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              View Publication
            </a>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
