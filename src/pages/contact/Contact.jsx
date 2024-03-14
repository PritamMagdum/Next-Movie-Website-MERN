import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";

import "./Contact.scss";
import { Link } from "react-router-dom";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <div className="detailsBanner">
      {loading ? (
        <>
          <React.Fragment>
            <div className="backdrop-img">
              <Img src="/logo.png" />
            </div>
            <div className="opacity-layer"></div>
            <ContentWrapper>
              <div className="content">
                <div className="left">
                  <Img className="posterImg" src="/logo.png" />
                </div>
                <div className="right">
                  <div className="title">Next Movie</div>
                  <div className="subtitle">
                    The Best Online Movies and TV Shows Streaming Platform
                  </div>

                  <div className="overview">
                    <div className="heading">Contact Us</div>
                    <div className="description">
                      Step into the world of{" "}
                      <Link to="/" className="pritam">
                        Next Movie
                      </Link>
                      , where cinematic brilliance meets technological
                      innovation. Created by Pritam Magdum, a passionate
                      software developer with a deep love for movies, Next Movie
                      offers an unparalleled streaming experience. With Pritam's
                      expertise driving the platform forward, we deliver
                      seamless access to a vast library of films, curated to
                      satisfy every cinematic craving. Embark on a journey with
                      us as we redefine the art of online movie-watching,
                      bringing the magic of the silver screen directly to you.
                    </div>
                    <br />
                    <div className="description">
                      Discover Next Movie, where the magic of cinema meets the
                      convenience of modern technology. Our platform is a
                      testament to innovation and dedication, providing a
                      seamless streaming experience for movie lovers everywhere.
                      With a diverse array of films at your fingertips, curated
                      to delight and inspire, we invite you to immerse yourself
                      in the world of storytelling like never before. Join us on
                      a journey where each click unlocks a new adventure,
                      bringing the joy of the silver screen directly to you.
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

export default Contact;
