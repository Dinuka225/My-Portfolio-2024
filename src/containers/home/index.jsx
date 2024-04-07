import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { motion } from "framer-motion";
import SocialLinks from "../../components/utils/SocialLinks";
import Button from "../../components/utils/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <motion.section
      id="home"
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: Window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="home_text-wrapper">
        <h1>
          Hello,I'm Dinuka Saranga.
          <br />
          Trainee Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={0.5}
        delay={0.5}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home_contact-me">
          <Button onClick={handleNavigateToContactMePage} text="Contact Me" />
          <a
            href="https://drive.google.com/file/d/1KembBPSbXN7Yzfj4OTx9NxRYrttXlCbx/view"
            download
          >
            <Button text="View My CV" />
          </a>
        </div>
        <div className="socialMedia_links">
          <SocialLinks />
        </div>
      </Animate>
    </motion.section>
  );
};

export default Home;
