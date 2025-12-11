import { useState } from "react";
import "../css/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h2 className="logo">SUJOY</h2>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={isOpen ? "nav open" : "nav"}>
        <a href="#">Write a Review</a>
        <a href="#">Categories</a>
        <a href="#">Blog</a>
        <button className="signup-btn">Sign Up</button>
      </nav>
    </header>
  );
}
