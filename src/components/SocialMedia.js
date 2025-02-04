import React from "react";
import LogoFacebook from "../images/socialmedia/Facebook.png";
import LogoInstagram from "../images/socialmedia/Instagram.png";
import LogoLinkedin from "../images/socialmedia/LinkedIn.webp";
import "../Styles/SocialMedia.css";
function SocialMedia() {
  return (
    <div>
      <ul className="SocialMedia">
        <li>
          <a
            href="https://www.linkedin.com/in/quentin-romera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoLinkedin} alt="Logo LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/quentin.rma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoFacebook} alt="Logo Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/quentin.rma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoInstagram} alt="Logo Instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
