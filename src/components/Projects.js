import React from "react";
import { Container } from "react-bootstrap";
import portfolioImg from "../assets/portfolioimage.png";
import badrobotsirlImg from "../assets/badrobotsirl.png";
import mpsarchImg from "../assets/mpsarchitecture.png";
import dadskitchenImg from "../assets/dadskitchen.png";
import pulseImg from "../assets/pulse.png";

export const Projects = () => {
  const projects = [
    {
      title: "BadRobotsIRL",
      description:
        "Recognizing successive robot failure by analyzing human reactions and behaviors during human-robot interactions. Presented at the 20th IEEE/ACM International Conference on Human-Robot Interaction (HRI 2025).",
      link: "https://github.com/IRL-CT/badrobotsIRL",
      imgUrl: badrobotsirlImg,
      skills: "Machine Learning & Data - Python, Tensorflow, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib",
      status: "Presented analysis. Currently training models to predict robot failure based on human reactions :)",
      affiliation: "Interaction Research Lab (IRL), Cornell Tech"
    },
    {
      title: "Mini Plane System",
      description:
        "Building a system to control GoPro image capture/settings, gimbal movement, and image/telemetry transmission for an autonomous search and rescue plane.",
      link: "https://github.com/CUAir/mini-plane-system",
      imgUrl: mpsarchImg,
      skills: "Embedded Systems - Python, Rust, Raspberry Pi",
      status: "Currently in development :D",
      affiliation: "Cornell University Unmanned Air Systems (CUAir), Cornell University"
    },
    {
      title: "Dad's Kitchen",
      description: "Developing a web app to help users manage and update recipes and ingredients, and interact with a community of chefs and eaters through ratings and reviews. Inspired by my dad who loves coding and cooking XD.",
      link: "https://github.com/shannon-jliu/dadskitchen-frontend",
      imgUrl: dadskitchenImg,
      skills: "Full Stack - Java, JavaScript, React.js, HTML, CSS, PostgreSQL, Spring",
      status: "Currently in development :O"
    },
    {
      title: "Portfolio Website",
      description:
        "Documenting experiences and projects created throughout my career. Experimenting with UI design and responseive web development.",
      link: "https://github.com/shannon-jliu/portfolio",
      imgUrl: portfolioImg,
      skills: "Frontend - JavaScript, React.js, HTML, CSS",
      status: "Always a work in progress ;)"
    },
    {
      title: "Pulse",
      description: "Built a web app for Black Heart Association that visualizes community impact, streamlines scheduling, surfaces policy and health insights via an interactive map, and provides a CDC-informed chatbot for actionable decision support.",
      link: "https://github.com/cfgtexas25/Team-34",
      imgUrl: pulseImg,
      skills: "Python, Flask, React, JavaScript, HTML, CSS",
      status: "Completed at the J.P. Morgan Chase Code For Good Hackathon 2026"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-title">Projects</h2>
        <div className="projects-gallery">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-wrapper"
              >
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="project-image"
                />
              </a>
              <div className="project-content">
                <h3>{project.title}</h3>
                <h4 className="project-affiliation"> <strong>{project.affiliation ? project.affiliation : ""}</strong></h4>
                <h5>{project.status}</h5>
                <p>{project.description}</p>
                <h6>{project.skills}</h6>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
