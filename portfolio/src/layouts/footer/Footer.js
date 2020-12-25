import React from "react";
import { useLocation, Link } from "react-router-dom";

import Styles from "./footer.module.scss";

import logo from "../../assets/footer/logo.svg";
import github from "../../assets/footer/github.svg";
import twitter from "../../assets/footer/twitter.svg";
import linkedin from "../../assets/footer/linkedin.svg";

const navLinks = {
  items: [
    { name: "Home", route: "/" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact me", route: "/contact" },
  ],
};

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container_lhs}>
        <img src={logo} alt="logo" width="40px" style={{ cursor: "pointer" }} />
        <ul>
          {navLinks.items.map((item) => (
            <li>
              <Link to={`${item.route}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={Styles.container_rhs}>
        <img src={github} alt="github" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export default Footer;
