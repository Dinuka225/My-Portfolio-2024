import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";

const personalDeatils = [
  {
    label: "Name :",
    value: "Dinuka Saranga",
  },
  {
    label: "Age :",
    value: "25",
  },
  {
    label: "Email :",
    value: "Dinukasaranga25@gmail.com",
  },
  {
    label: "Mobile Number :",
    value: "+94 778 068 839",
  },
  {
    label: "Region :",
    value: "Sri Lanka",
  },
];

const About = () => {
  const jobSummery = `As a dedicated undergraduate at UCSC, I specialize in frontend development with a growing proficiency in backend technologies. With hands-on experience in HTML5, CSS3, JavaScript, ReactJS, Node.js, and Express.js, Im poised to create engaging digital experiences. Explore my portfolio to see my projects and witness my passion for pushing the boundaries of web development.`;
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
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
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDeatils.map((item , i) => (
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
            duration={1}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
