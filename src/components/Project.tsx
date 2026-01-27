import React from "react";
import latlong from "../assets/images/latlong.png";
import sepsis from "../assets/images/sepsis.png";
import tsunami from "../assets/images/tsunami.png";
import salted from "../assets/images/salted.png";
import cluster from "../assets/images/cluster.png";
import "../assets/styles/Project.scss";

const projects = [
  {
    title: "Weather-Based Prediction of Sidewalk Slip Risk in Winter (Hackathon)",
    link: "https://github.com/mara-sanchez1/salted", 
    image: salted,
    description:
      "Developed an end-to-end ML-based black ice risk prediction system using Python with geospatial and meteorological data, performing feature engineering and risk scoring on Vancouver sidewalk networks, and deploying an interactive web dashboard to communicate insights.",
  },
  {
    title: "Predicting Sepsis Survival Based on Clinical Records",
    link: "https://github.com/Eligoze75/Sepsis-Survival-Minimal-Clinical-Records",
    image: sepsis,
    description:
      "Built and evaluated machine learning models to predict sepsis survival using minimal clinical records, with emphasis on feature engineering, validation, and interpretability.",
  },
  {
    title: "Data-Driven Clustering of Subsurface Imaging Data",
    link: "https://github.com/sapolraadnui/Data-Driven-Clustering-of-Multidimensional-Subsurface-Imaging-Data",
    image: cluster,
    description:
      "Applied unsupervised learning techniques to multidimensional subsurface imaging data to uncover structure in complex geophysical signals and support data-driven interpretation.",
  },
  {
    title: "Tsunami Prediction (MDS Datathon)",
    link: "https://github.com/sapolraadnui/MDS_Datathon_Tsunami_Prediction",
    image: tsunami,
    description:
      "Developed an end-to-end predictive pipeline for tsunami-related outcomes, focusing on robust preprocessing, model selection, and performance evaluation.",
  },
  {
    title: "LatLongHelper",
    link: "https://github.com/UBC-MDS/latlonghelper",
    image: latlong,
    description:
      "Lightweight utility for working with latitude/longitude data, simplifying coordinate validation, transformation, and geospatial preprocessing workflows.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Technical Projects</h1>

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