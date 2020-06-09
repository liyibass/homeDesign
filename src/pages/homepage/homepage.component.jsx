import React from "react";
import "./homepage.style.scss";
import { EventHandler } from "../../scripts/EventHandler";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar.component";
import Main from "../Main/Main.component";

import ImgGallery from "../../components/ImgGallery/ImgGallery.component";
import About from "../About/About.component";
import Awards from "../Awards/Awards.component";
import Contact from "../Contact/Contact.component";

import { Switch, Route } from "react-router-dom";

function Homepage() {
  let ev = new EventHandler();

  return (
    <div className="homepage">
      <AnimatePresence>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Gallery" component={ImgGallery} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Awards" component={Awards} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default Homepage;
