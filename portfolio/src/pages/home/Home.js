import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/button/Button";
import Styles from "./home.module.scss";

import { Divider } from "@material-ui/core";

import arrow from "../../assets/home/down-arrows.svg";
import profile from "../../assets/home/profile.jpg";
import banner from "../../assets/home/hero.jpg";

const Home = () => {
  const history = useHistory();
  
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.header_image}>
          <img src={banner} alt="/" />
        </div>
        <div className={Styles.hero}>
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>

          <Button
            primary="primary"
            text="About me"
            color="#203a4c"
            arrow={arrow}
          />
        </div>
      </div>
      <div className={Styles.about}>
        <div className={Styles.about_image}>
          <img src={profile} alt="Name" />{" "}
        </div>
        <div className={Styles.about_text}>
          <Divider />
          <div className={Styles.about_text_wrapper}>
            <h2>About Me</h2>
            <p>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <Button
              text="Go to my portfolio"
              handleClick={() => history.push("/portfolio")}
            />
          </div>

          <Divider />
        </div>
      </div>
    </div>
  );
};

export default Home;
