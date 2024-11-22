import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>sneakers</h1>
        <nav className="nav">
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">contact</a>
        </nav>

        <div className="info">
          <img src="./assets/shape.png" alt="" width={16} height={16} />
          <div className="profile"></div>
        </div>
      </header>
      <div className="line"></div>
    </div>
  );
}
