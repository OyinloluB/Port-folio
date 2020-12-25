import { Divider } from "@material-ui/core";
import React from "react";
import Button from "../button/Button";

import Styles from "./ctaFooter.module.scss";

const ctaFooter = () => {
  return (
    <div className={Styles.container}>
      <div>
        <h2>Interested in doing a project together?</h2>
      </div>
      <Divider />
      <div>
        <Button text="Contact me" />
      </div>
    </div>
  );
};

export default ctaFooter;
