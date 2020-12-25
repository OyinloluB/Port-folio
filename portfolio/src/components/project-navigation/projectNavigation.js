import React from "react";
import { Divider } from "@material-ui/core";

import Styles from "./projectnav.module.scss";

import ArrowLeft from "../../assets/portfolio/icons/arrow-left.svg";
import ArrowRight from "../../assets/portfolio/icons/arrow-right.svg";

const ProjectNavigation = ({ nextProject, previousProject, id }) => {
  return (
    <div className={Styles.main_container}>
      <Divider />
      <div className={Styles.container}>
        <div className={Styles.container_left} onClick={previousProject}>
          {id === 1 ? (
            ""
          ) : (
            <img
              src={ArrowLeft}
              alt="Previous Project"
              style={{
                marginRight: "15px",
              }}
            />
          )}
          <div>{id === 1 ? "" : <p>Previous Project</p>}</div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={Styles.container_right} onClick={nextProject}>
          <div>{id === 4 ? "" : <p>Next Project</p>}</div>
          {id === 4 ? (
            ""
          ) : (
            <img
              src={ArrowRight}
              alt="Next Project"
              style={{
                marginLeft: "15px",
              }}
            />
          )}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ProjectNavigation;
