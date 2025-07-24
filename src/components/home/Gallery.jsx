import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Jumbotron } from "./migration";
import zero from './gallery/0.jpg';
import one  from './gallery/1.jpeg'
import two  from './gallery/2.jpeg'
import three  from './gallery/3.jpeg'
import four  from './gallery/4.jpeg'
import five  from './gallery/5.jpeg'
import six  from './gallery/6.jpeg'
import seven  from './gallery/7.jpeg'
import eight  from './gallery/8.jpeg'
import nine  from './gallery/9.jpeg'
import twelve  from './gallery/12.jpeg'
import thirteen  from './gallery/13.jpeg'
import forteen  from './gallery/14.jpeg'

const bgStyle = { backgroundColor: "rgb(233, 236, 239)" };

// Replace with actual image URLs
const technicalImages = [
     zero,one,two,three,four,five,six,seven,eight,nine,forteen
];

const otherImages = [
  twelve,thirteen
];

const ImageCarousel = ({ title, images }) => (
  <Jumbotron fluid className="m-0">
    <Container style={bgStyle} className="text-center py-5">
      <h2 className="display-5 pb-3">{title}</h2>
      <Carousel fade interval={1500} className="shadow-lg rounded">
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <img style={{ height:"800px" , objectFit: "contain" }} className="d-block w-100" src={imgSrc} alt={`${title} Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </Jumbotron>
);

const Gallery = () => {
  return (
    <Container id="gallery" fluid className=" m-0 text-center mt-3">
      <h2 className="display-5 pb-3">Gallery</h2>
      <Tabs defaultActiveKey="technical" id="gallery-tabs" fill>
        <Tab eventKey="technical" title="Academics">
          <ImageCarousel images={technicalImages} />
        </Tab>
        <Tab eventKey="other" title="Miscellaneous">
          <ImageCarousel  images={otherImages} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Gallery;
