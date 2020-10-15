import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://i.imgur.com/bAcuq7b.png"
        alt="Netflix_logo"
      />

      <img
        className="nav_avatar"
        src="https://i.imgur.com/V4kqUHT.png"
        alt="User_logo"
      />
    </div>
  );
}

export default Nav;
