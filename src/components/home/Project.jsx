import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const researchPapers = [
  {
    title: "Boli: A dataset for understanding stuttering experience and analyzing stuttered speech",
    authors: "Ashita Batra, Mannas Narang, Neeraj Sharma, Pradip K Das",
    conference: "2025 IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2025)",
    link: "https://arxiv.org/abs/2501.15877",
    color:"#E3F2FD"
  },
  {
    title: "Does Data Balancing Impact Stutter Detection and Classification?",
    authors: "Ashita Batra, Pratyush Shrivastava, Pradip K Das",
    conference: "International Conference on Distributed Computing and Intelligent Technology (ICDCIT 2025)",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-81404-4_16",
    color:"#FFEFD5"
  },
  {
    title: "Comparative Analysis of Classifiers using Wav2Vec2.0 Layer Embeddings for Imbalanced Stuttering Datasets",
    authors: "Madhurima Sen*, Ashita Batra*, Pradip K Das",
    conference: "First International Conference on Electronics, Communication and Signal Processing (ICECSP), NIT Delhi, India, 2024",
    link: "https://ieeexplore.ieee.org/document/10698081",
    color:"#FFEFD5"
  },
  {
    title: "Machine Learning Models Based Stuttering Classification",
    authors: "Ashita Batra, Rishabh Shah, Pradip K. Das",
    conference: "Fourth International Conference on Innovations in Computational Intelligence and Computer Vision (ICICV), 2024",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-6995-7_30",
    color:"#E3F2FD"
  },
  {
    title: "A review on automatic assessment and detection of pathological speech",
    authors: "Ashita Batra and Pradip K. Das",
    conference: "International Conference on Science/Technology and Engineering (ISCTE-2023), Imphal, Manipur, India, 2023",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-4713-3_40",
    color:"#E3F2FD"
  },
  {
    title: "A Deep Learning Hybrid CNN Framework Approach for Vegetation Cover Mapping Using Deep Features",
    authors: "Rahul Nijhawan, Himanshu Sharma, Harshita Sahni, Ashita Batra",
    conference: "13th International Conference on Signal-Image Technology & Internet-Based Systems (SITIS 2017)",
    link: "https://ieeexplore.ieee.org/abstract/document/8334746",
    color:"#FFEFD5"
  },
  {
    title: "VTnet+ Handcrafted based approach for food cuisines classification",
    authors: "Rahul Nijhawan, Garima Sinha, Ashita Batra, Manoj Kumar, Himanshu Sharma",
    conference: "Journal of Multimedia Tools and Applications (MTAP 2024)",
    link: "https://link.springer.com/article/10.1007/s11042-023-15800-4",
    color:"#FFEFD5"
  },
  {
    title: "Food classification of Indian cuisines using handcrafted features and vision transformer network",
    authors: "Rahul Nijhawan, Ashita Batra, Manoj Kumar, Deepak Kumar Jain",
    conference: "Available at SSRN",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4014907",
    color:"#E3F2FD"
  },
  {
    title: "DDoS: Detecting different types of stuttered speech of multiple speakers exploiting various feature extraction techniques",
    authors: "Ashita Batra, Hema Venkat Rao, Pradip K. Das",
    conference: "6th International Conference on Machine Learning, Image Processing, Network Security, and Data Sciences (MIND 2024)",
    link: "",
    color:"#E3F2FD"
  },
  {
    title: "Exploring Whisper Embeddings for Stutter Detection: A Layer-Wise Study",
    authors: "Ashita Batra, Brajesh Kar, Pradip K Das",
    conference: "EUSIPCO 2025",
    link: "",
    color:"#FFEFD5"
  }
];


const Project = () => {
  return (
    <Jumbotron fluid id="publications" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">Publications</h2>
        <Row>
          {researchPapers.map((paper, index) => (
            <ProjectCard key={index} value={paper} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
