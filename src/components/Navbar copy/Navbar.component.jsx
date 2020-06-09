import React from "react";
import "./Navbar.style.scss";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";

function Navbar() {
  const navLists = [
    { id: 1, enTitle: "PROJECTS", chTitle: "作品展示" },
    { id: 2, enTitle: "ABOUT US", chTitle: "公司簡介" },
    { id: 3, enTitle: "PRESS", chTitle: "雜誌報導" },
    { id: 4, enTitle: "AWARDS", chTitle: "得獎紀錄" },
    { id: 5, enTitle: "CONTACT", chTitle: "聯絡我們" },
  ];
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <i className="fab fa-adn fa-4x"></i>
      </div>
      <ul className="navlist">
        {navLists.map((navListItem) => {
          return (
            <li className="navlist-item" key={navListItem.id}>
              <Link to="/">
                <Button
                  enTitle={navListItem.enTitle}
                  chTitle={navListItem.chTitle}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
