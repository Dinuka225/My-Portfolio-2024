import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleViewMyCv = () => {
    navigate("/cv");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello,I'm Dinuka Saranga.
          <br />
          Trainee Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact Me</button>
          <button onClick={handleViewMyCv}>View My CV</button>
        </div>
        <div className="socialMedia_links">
          <a href="https://web.facebook.com/dinuka.saranga.357/" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/in/dinuka-saranga-021748282/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/dinuka_dsm/" target="_blank" rel="noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="http://Wa.me/+94778068839" target="_blank" rel="noreferrer">
            <FaWhatsappSquare />
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
