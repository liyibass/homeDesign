import React, { useState, useEffect } from "react";
import "./Main.style.scss";
import { motion } from "framer-motion";

import { Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div
      className="mainPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/About">
        {" "}
        <div className="mainLogo">
          <i className="fab fa-adn fa-10x"></i>
          <h4>八德設計</h4>
        </div>
      </Link>
    </div>
  );
}

export default Main;
