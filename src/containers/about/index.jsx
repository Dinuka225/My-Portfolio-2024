import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact, FaDatabase, FaAngular, FaPhp } from "react-icons/fa";
import { DiApple } from "react-icons/di";
import { motion } from "framer-motion";
import personalDeatils from "../../components/utils/personalDetails";
import jobSummery from "../../components/utils/aboutSummery";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: Window.innerWidth, transition: { duration: 0.5 } }}
    >
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Fulls Stack Developer</h3>
            <p>{jobSummery}</p>
          </Animate>

          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(1800px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDeatils.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(1200px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaAngular size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaPhp size={70} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
