import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="socialMedia_links">
      <a
        href="https://github.com/dinukasaranga"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://web.facebook.com/dinuka.saranga.357/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/dinuka-saranga-021748282/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/dinuka_dsm/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a href="http://Wa.me/+94778068839" target="_blank" rel="noreferrer">
        <FaWhatsappSquare />
      </a>
    </div>
  );
};

export default SocialLinks;
