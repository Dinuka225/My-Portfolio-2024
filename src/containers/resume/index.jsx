/*
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "../../components/utils/data";
import "./styles.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className="timeline_experience_vertical_timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical_timeline-element-title-wrapper">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                </div>
                <p className="vertical_timeline-element-title-wrapper-description">
                  {item.fieldOfStudy}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline_experience">
          <h3 className="timeline_experience_header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical_timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date={item.date1}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical_timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical_timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

*/
