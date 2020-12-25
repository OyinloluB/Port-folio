import React, { useEffect, useState } from "react";
import { getProjectId, setProjectId } from "../../utils/projectId";

import Styles from "./project.module.scss";

import { Divider, makeStyles } from "@material-ui/core";
import Button from "../../components/button/Button";
import ProjectNavigation from "../../components/project-navigation/projectNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
}));

const ProjectDetails = ({ projects }) => {
  const classes = useStyles();
  const [id, setId] = useState(null);

  const nextProject = () => {
    if (id < 4) {
      setProjectId(id + 1);
      setId(id + 1);
    }
  };

  const previousProject = () => {
    if (id > 1) {
      setProjectId(id - 1);
      setId(id - 1);
    }
  };

  useEffect(() => {
    setId(getProjectId());
  }, [id]);

  const project = projects.items.find((item) => item.id === id);

  return (
    <div className={Styles.container}>
      <div className={Styles.image_container}>
        <img src={project?.hero} alt={project?.name} />
      </div>
      <div className={Styles.text}>
        <div className={Styles.text_lhs}>
          <div className={Styles.text_lhs_dsktop}>
            <Divider className={classes.root} />
            <h2>{project?.name}</h2>
            <p>{project?.note}</p>
            <p
              style={{
                color: "#5fb4a2",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Interaction Design/Front End Development
            </p>
            <p
              style={{
                color: "#5fb4a2",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {project?.language}
            </p>
            <Button text="Visit website" />
            <Divider className={classes.root} />
          </div>
          <div className={Styles.text_lhs_mobile}>
            <Divider className={classes.root} />
            <div className={Styles.text_lhs_mobile_container}>
              <div>
                <h2>{project?.name}</h2>
                <p
                  style={{
                    color: "#5fb4a2",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Interaction Design/Front End Development
                </p>
                <p
                  style={{
                    color: "#5fb4a2",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {project?.language}
                </p>
                <Button text="Visit website" />
              </div>
              <div style={{ marginLeft: "22px" }}>
                <p>{project?.note}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.text_rhs}>
          <div>
            <h3 style={{ marginTop: "0" }}>Project Background</h3>
            <p>{project?.projectBackground}</p>
          </div>
          <div>
            <h3>Static Previews</h3>
            <img
              src={project?.preview}
              alt={project?.name}
              style={{
                marginBottom: "3vh",
              }}
            />
            <img src={project?.subPreview} alt={project?.name} />
          </div>
        </div>
      </div>
      <ProjectNavigation
        nextProject={nextProject}
        previousProject={previousProject}
        id={id}
      />
    </div>
  );
};

export default ProjectDetails;
