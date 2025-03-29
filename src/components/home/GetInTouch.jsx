import React from "react";
import { Jumbotron } from "./migration";
import Container from "react-bootstrap/Container";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <Jumbotron fluid className="bg-light m-0" id="ta"> 
     <Container className="text-center">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> , <a style={{textDecoration:"none"}} href={`mailto:b.ashita@iitg.ac.in`}>b.ashita@iitg.ac.in</a>  , Contact No. - 0361-258394.
      </p>
      </Container>
    </Jumbotron>
  );
};

export default GetInTouch;
