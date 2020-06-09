import React from "react";
import "./homepage.style.scss";
import { EventHandler } from "../../scripts/EventHandler";
import Component from "../../components/Component/Component.component";
import Navbar from "../../components/Navbar/Navbar.component";
import ImgGallery from "../../components/ImgGallery/ImgGallery.component";
import About from "../About/About.component";

import { Switch, Route } from "react-router-dom";
function Homepage() {
  let ev = new EventHandler();
  return (
    <div className="homepage">
      <Navbar />

      <Switch>
        <Route exact path="/Gallery" component={ImgGallery} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
}

export default Homepage;
