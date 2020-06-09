import React from "react";
import "./Navbar.style.scss";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";

function Navbar() {
  const navLists = [
    { id: 1, enTitle: "ABOUT US", chTitle: "公司簡介", path: "/About" },
    { id: 2, enTitle: "PROJECTS", chTitle: "作品展示", path: "/Gallery" },
    // { id: 3, enTitle: "PRESS", chTitle: "雜誌報導", path: "/Gallery" },
    { id: 4, enTitle: "AWARDS", chTitle: "得獎紀錄", path: "/Awards" },
    { id: 5, enTitle: "CONTACT", chTitle: "聯絡我們", path: "/Contact" },
  ];
  return (
    <div className="navbar">
      <a href="/Main" className="navbar-logo">
        <i className="fab fa-adn fa-4x"></i>
        <h4>八德設計</h4>
      </a>
      <div className="navlist">
        {navLists.map((navListItem) => {
          return (
            <div className="navlist-item" key={navListItem.id}>
              <Link to={navListItem.path}>
                <Button
                  enTitle={navListItem.enTitle}
                  chTitle={navListItem.chTitle}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
