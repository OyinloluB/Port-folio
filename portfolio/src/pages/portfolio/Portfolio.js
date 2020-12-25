import React, { useState } from "react";

import { setProjectId } from "../../utils/projectId";

import Button from "../../components/button/Button";
import ProjectDetails from "./ProjectDetails";
import projects from "./objects/Object";

import Styles from "./portfolio.module.scss";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "300px",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const [detailsPage, setDetailsPage] = useState(false);

  return (
    <div>
      {!detailsPage ? (
        <div className={Styles.container}>
          {projects.items.map((item) => (
            <>
              {item.inverted === false ? (
                <div className={Styles.portfolio}>
                  <div className={Styles.portfolio_image}>
                    <img src={item.thumbnail} alt={item.name} />{" "}
                  </div>
                  <div className={Styles.portfolio_text}>
                    <Divider className={classes.root} />
                    <div className={Styles.portfolio_text_wrapper}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <Button
                        text="View project"
                        handleClick={() => {
                          setProjectId(item.id);
                          setDetailsPage(true);
                        }}
                      />
                    </div>
                    <Divider className={classes.root} />
                  </div>{" "}
                </div>
              ) : (
                <>
                  <div className={Styles.inverse_dsktp}>
                    <div className={Styles.portfolio_text}>
                      <Divider />
                      <div className={Styles.portfolio_text_wrapper}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Button
                          text="View project"
                          handleClick={() => {
                            setProjectId(item.id);
                            setDetailsPage(true);
                          }}
                        />
                      </div>
                      <Divider className={classes.root} />
                    </div>
                    <div className={Styles.portfolio_image}>
                      <img src={item.thumbnail} alt={item.name} />{" "}
                    </div>
                  </div>
                  <div className={Styles.inverse_mobile}>
                    <div className={Styles.portfolio_image}>
                      <img src={item.thumbnail} alt={item.name} />{" "}
                    </div>
                    <div className={Styles.portfolio_text}>
                      <Divider />
                      <div className={Styles.portfolio_text_wrapper}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Button
                          text="View project"
                          handleClick={() => {
                            setProjectId(item.id);
                            setDetailsPage(true);
                          }}
                        />
                      </div>
                      <Divider className={classes.root} />
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      ) : (
        <ProjectDetails
          projects={projects}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </div>
  );
};

export default Portfolio;
