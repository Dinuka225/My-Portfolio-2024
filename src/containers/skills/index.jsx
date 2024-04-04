import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "../../components/utils/skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills_contentWrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_contentWrapper_inner_content">
            <Animate
              play
              duration={1}
              delay={0.2}
              start={{
                transform: "translateX(-300px)",
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
    </section>
  );
};

export default Skills;
