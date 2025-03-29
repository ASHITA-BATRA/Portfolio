import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {

  return (
    <footer  className="bg-light mt-auto py-2 text-center ">
      <Container>
        {props.children}
        {/* <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "} */}
        {/* <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "} */}
        {/* using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p> */}
      </Container>
    </footer>
  );
};

export default Footer;
