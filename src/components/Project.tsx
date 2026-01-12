import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import "../assets/styles/Project.scss";

const projects = [
  {
    title: "Sepsis Survival (Minimal Clinical Records)",
    link: "https://github.com/Eligoze75/Sepsis-Survival-Minimal-Clinical-Records",
    image: mock01,
    description:
      "Built and evaluated machine learning models to predict sepsis survival using minimal clinical records, with emphasis on feature engineering, validation, and interpretability.",
  },
  {
    title: "Data-Driven Clustering of Subsurface Imaging Data",
    link: "https://github.com/sapolraadnui/Data-Driven-Clustering-of-Multidimensional-Subsurface-Imaging-Data",
    image: mock02,
    description:
      "Applied unsupervised learning techniques to multidimensional subsurface imaging data to uncover structure in complex geophysical signals and support data-driven interpretation.",
  },
  {
    title: "Tsunami Prediction (MDS Datathon)",
    link: "https://github.com/sapolraadnui/MDS_Datathon_Tsunami_Prediction",
    image: mock03,
    description:
      "Developed an end-to-end predictive pipeline for tsunami-related outcomes, focusing on robust preprocessing, model selection, and performance evaluation.",
  },
  {
    title: "LatLongHelper",
    link: "#", // replace with repo link when available
    image: mock04,
    description:
      "Lightweight utility for working with latitude/longitude data, simplifying coordinate validation, transformation, and geospatial preprocessing workflows.",
  },
  {
    title: "Automated Feature Selection for Geospatial Image Analysis",
    link: "#", // replace with repo link when available
    image: mock05,
    description:
      "Explored automated feature selection methods for geospatial image data to improve model performance, interpretability, and robustness in spatial ML pipelines.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt={`${project.title} thumbnail`}
                width="100%"
              />
            </a>

            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;