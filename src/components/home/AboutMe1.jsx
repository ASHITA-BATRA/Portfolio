import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe1 = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [showPic, setShowPic] = useState(Boolean(link));
  const [imageSize, setImageSize] = useState(imgSize);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
      if (window.innerWidth < 576) {
        setImageSize(imgSize / 3);
      } else if (window.innerWidth < 850) {
        setImageSize(imgSize / 2);
      } else {
        setImageSize(imgSize);
      }
    };
    
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imgSize]);
  
  useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container">
        <div className={`row d-flex flex-row align-items-center`}>  
          <h2 className="display-4 mb-3 text-center">{heading}</h2>
          {showPic && isSmallScreen && (
            <div className="text-center mb-3 mt-3">
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imageSize}
                height={imageSize}
              />
            </div>
          )}
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
        {!isSmallScreen && showPic && (
          <div className="row justify-content-center mt-4">
            <div className="col-lg-5 text-center text-lg-start">
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imageSize}
                height={imageSize}
              />
            </div>
          </div>
        )}
      </div>
    </Jumbotron>
  );
};

export default AboutMe1;

