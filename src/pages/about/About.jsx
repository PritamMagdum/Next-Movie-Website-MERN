import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";

import "./About.scss";
const About = () => {
  const [loading, setLoading] = useState(false);
  //   const { data, setData } = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <div className="detailsBanner">
      {loading ? (
        <>
          <React.Fragment>
            <div className="backdrop-img">
              <Img src="/Pritam.png" />
            </div>
            <div className="opacity-layer"></div>
            <ContentWrapper>
              <div className="content">
                <div className="left">
                  <Img className="posterImg" src="/Pritam.png" />
                </div>
                <div className="right">
                  <div className="title">Pritam Magdum</div>
                  <div className="subtitle">
                    A Passionate Software Developer
                  </div>

                  <div className="overview">
                    <div className="heading">About Us</div>
                    <div className="description">
                      <a
                        href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
                        target="_"
                        className="pritam"
                      >
                        Pritam Magdum
                      </a>
                      , the visionary founder of "Next Movie", is not only a
                      passionate cinephile but also a software developer. With
                      years of experience in the tech industry, Pritam's
                      expertise in programming languages, web development
                      frameworks, and database management systems paved the way
                      for the creation of Next Movie.{" "}
                    </div>
                    <br />
                    <div className="description">
                      Pritam's hands-on approach and commitment to excellence
                      are evident in every aspect of Next Movie's development,
                      from its architecture to its user experience. His
                      leadership fosters a dynamic and collaborative
                      environment, driving innovation and pushing the boundaries
                      of digital entertainment. Through his vision and technical
                      acumen, Pritam continues to shape Next Movie into a
                      premier destination for movie enthusiasts worldwide,
                      delivering an immersive and unforgettable movie-watching
                      experience.
                    </div>
                  </div>
                </div>
              </div>
            </ContentWrapper>
          </React.Fragment>
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default About;
