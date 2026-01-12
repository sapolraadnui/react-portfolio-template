import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDatabase, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Python (Pandas/NumPy/SciPy)",
  "scikit-learn",
  "R (tidyverse)",
  "SQL",
  "Regression",
  "Tree-based Models",
  "Clustering",
  "Dimensionality Reduction",
  "Model Validation",
  "SHAP",
  "Hypothesis Testing",
  "Matplotlib",
  "Seaborn",
  "Altair",
  "ggplot2",
  "PowerBI",
  "Tableau",
];

const labelsSecond = [
  "Git / GitHub",
  "CI/CD",
  "Conda",
  "Docker",
  "Makefiles",
  "PostgreSQL",
  "MongoDB",
  "pgAdmin",
];

const labelsThird = [
  "ArcGIS",
  "Petrel",
  "DecisionSpace (DSG)",
  "Geopsy",
  "MATLAB",
  "Geospatial Analysis",
  "Geophysical Interpretation",
  "Data Integration",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Data Science / ML + Visualization */}
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data Science, ML & Visualization</h3>
            <p>
              I build end-to-end analytics and machine learning workflows—from data cleaning and feature
              engineering to training, validation, and interpretation. I’m comfortable with supervised and
              unsupervised methods (regression, tree-based models, clustering, dimensionality reduction),
              and I use tools like SHAP to explain model behavior. I also communicate results through clear,
              decision-ready visuals and dashboards.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Core stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Data Engineering & Reproducible Pipelines</h3>
            <p>
              I create reliable, reproducible workflows using modern engineering practices—version control,
              environment management, containerization, and CI/CD. I work comfortably with relational
              databases (PostgreSQL) and NoSQL (MongoDB), and I care about maintainable structure (Makefiles,
              clean scripts, and documentation).
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tooling:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Geospatial / Geophysics */}
          <div className="skill">
            <FontAwesomeIcon icon={faGlobeAmericas} size="3x" />
            <h3>Geospatial & Geophysical Analytics</h3>
            <p>
              I bring geoscience domain expertise—combining geospatial analysis with subsurface
              interpretation tools. I’ve worked with GIS and geophysical platforms to integrate technical
              datasets, validate assumptions, and translate complex signals into insights that teams can act on.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Domain tools:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;