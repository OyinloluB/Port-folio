import React, { useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";

import logo from "../../assets/navigation-bar/logo.svg";
import hamburger from "../../assets/navigation-bar/hamburger.svg";
import close from "../../assets/navigation-bar/close.svg";

import Styles from "./navigation.module.scss";

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const [sidebar, setSidebar] = useState(false);

  const navLinks = {
    items: [
      { name: "Home", route: "/" },
      { name: "Portfolio", route: "/portfolio" },
      { name: "Contact me", route: "/contact" },
    ],
  };

  const activeStyle = {
    color: "#5FB4A2",
  };

  return (
    <div className={Styles.container}>
      <div onClick={() => history.push("/")}>
        <img src={logo} alt="logo" width="40" style={{ cursor: "pointer" }} />
      </div>
      <div className={Styles.container_navLinks}>
        <ul>
          {navLinks.items.map((item) => (
            <li>
              {location.pathname === item.route ? (
                <Link to={`${item.route}`} style={activeStyle}>
                  {item.name}
                </Link>
              ) : (
                <Link to={`${item.route}`}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className={Styles.hamburger}>
          {sidebar ? (
            <img
              src={close}
              alt="close-menu"
              width="20"
              onClick={() => setSidebar(false)}
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger-menu"
              width="30"
              onClick={() => setSidebar(true)}
            />
          )}
        </div>
        {sidebar && (
          <div className={Styles.mobile_nav}>
            {navLinks.items.map((item) => (
              <li>
                {location.pathname === item.route ? (
                  <Link to={`${item.route}`} style={activeStyle}>
                    {item.name}
                  </Link>
                ) : (
                  <Link to={`${item.route}`}>{item.name}</Link>
                )}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
