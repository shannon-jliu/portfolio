import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Container } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import cuairIcon from "../assets/cuair-icon.jpeg";
import factsetIcon from "../assets/factset-icon.jpeg"
import cornelltechIcon from "../assets/cornell-tech-icon.jpeg";
import cornelluniversityIcon from "../assets/cornell-university-icon.jpeg";
import trilliumtradingIcon from "../assets/trilliumtrading-icon.jpg";
import googleIcon from "../assets/googlelogo.png";
import ReactMarkdown from 'react-markdown';
import React from "react";

export const Experience = () => {

  const experiences = [
    {
      id: 1,
      position: "Incoming Software Engineering Intern, Home & Health AI",
      location: "Google LLC",
      date: "May 2026 – August 2026",
      description: "Incoming software engineering intern on the Home & Health AI team.",
      skills: "Software Engineering, AI",
      icon: googleIcon
    },
    {
      id: 2,
      position: "Machine Learning Undergraduate Researcher",
      location: "Cornell Tech",
      date: "June 2024 – Present",
      description: "Led research on the Bystander Affect Detection (BAD) Robots project studying human responses to repeated robot failures. Analyzed 30+ videos extracting 66 features to generate 28K+ data points. Built, trained, and evaluated multimodal time-series models achieving 93% accuracy. Published two papers (one peer-reviewed, one extended abstract) on the findings.",
      skills: "Python, TensorFlow, PyTorch, scikit-learn",
      icon: cornelltechIcon,
    },
    {
      id: 3,
      position: "Cybersecurity Engineering Intern",
      location: "FactSet Research Systems Inc.",
      date: "June 2025 – December 2025",
      description: "Built scalable cloud-native solutions with role-based access control using JavaScript, GraphQL, and Azure. Engineered MCP tools and a Python server with Anthropic Claude for querying vulnerabilities via LLM-driven support. Deployed a threat intelligence platform on AWS EKS automating threat data collection.",
      skills: "JavaScript, GraphQL, Azure, Python, Anthropic Claude, AWS EKS, Kubernetes, Helm, PostgreSQL, CI/CD",
      icon: factsetIcon
    },
    {
      id: 4,
      position: "Software Engineer",
      location: "Cornell University Unmanned Air Systems (CUAir)",
      date: "October 2023 – Present",
      description: "Designed and built the 'Plane System' application in Python and Rust for GoPro image capture and real-time data transmission. Developed a full-stack Java and React application to analyze flight data. Onboarded and mentored new team members.",
      skills: "Python, Rust, Java, React",
      icon: cuairIcon,
    },
    {
      id: 5,
      position: "Software Engineer Intern",
      location: "Trillium Trading, LLC",
      date: "July 2022",
      description: "Engineered 6 high-performance Java simulators for stock-locate workflows to test trading infrastructure. Built simulators using FIX protocol and REST APIs. Implemented multithreaded, concurrent processing for stock quotes under high-throughput conditions.",
      skills: "Java, FIX protocol, REST APIs, Multithreading",
      icon: trilliumtradingIcon,
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <Container classname="experience-timeline">
        <div className="vertical-timeline-wrapper">
          <h2 className="section-title">Experience</h2>
          <VerticalTimeline className="vertical-timeline">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                dateClassName="date"
                iconStyle={{ background: `url(${experience.icon})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", border: "1px solid ", boxShadow: "0 0 0 5px #7aa8f9" }}
                iconClassName="vertical-timeline-element-icon"
                className="vertical-timeline-element"
              >
                <div className="experience-box">
                  <h3 className="vertical-timeline-element-title">{experience.position}</h3>
                  <h5 className="vertical-timeline-element-subtitle">{experience.location}</h5>
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="vertical-timeline-element-description" {...props} />
                      ),
                      a: ({ node, ...props }) => (
                        <a target="_blank" rel="noopener noreferrer" {...props} />
                      ),
                    }}
                  >
                    {experience.description}
                  </ReactMarkdown>
                  <p className="vertical-timeline-element-skills">{experience.skills}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  )

}