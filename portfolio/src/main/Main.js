import React from "react";
import { Route, useLocation } from "react-router-dom";

import Navigation from "../layouts/navigation-bar/Navigation";
import CtaFooter from "../components/cta-footer/ctaFooter";
import Footer from "../layouts/footer/Footer";
import Home from "../pages/home/Home";

import Styles from "./main.module.scss";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

const Main = () => {
  const location = useLocation();

  return (
    <div>
      <div className={Styles.container}>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

        {location.pathname === "/contact" ? "" : <CtaFooter />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
