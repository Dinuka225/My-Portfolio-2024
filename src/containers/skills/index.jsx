import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "../../components/utils/skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: Window.innerWidth, transition: { duration: 0.5 } }}
    >
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills_contentWrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_contentWrapper_inner_content">
            <Animate
              play
              duration={0.5}
              delay={0.5}
              start={{
                transform: "translateX(-1800px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills_contentWrapper_inner_content_category-name">
                {item.label}
              </h3>

              <div className="skills_contentWrapper_inner_content_progrssbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    interactionCount="1"
                    key={j}
                  >
                    <div className="skill-prograssbar" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
