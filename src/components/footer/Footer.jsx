import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <Link
            to="/about"
            className="menuItem"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="menuItem"
            style={{ textDecoration: "none" }}
          >
            Contact
          </Link>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Next Movie, where passion for cinema meets cutting-edge
          technology. Founded by Pritam Magdum, a visionary software developer
          and avid movie buff, Next Movie is your gateway to a seamless online
          movie-watching experience. With a dedication to innovation and a love
          for storytelling, Pritam has crafted a platform that redefines how you
          enjoy films. Explore our vast collection of movies, from timeless
          classics to the latest blockbusters, all at your fingertips. Join us
          on a journey where every click brings you closer to the magic of the
          silver screen.
        </div>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
            target="_"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>

          <a href="https://twitter.com/pritam1622" target="_">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>

          <a href="https://www.instagram.com/pritam_magdum_72_12/" target="_">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>

          <a href="https://www.facebook.com/pritam.magdumpm" target="_">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
        </div>
        <div className="developer-section">
          Developer -{" "}
          <a
            href="https://www.linkedin.com/in/pritam-magdum-63b242221/"
            target="_"
            className="developer"
          >
            Pritam Magdum
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
