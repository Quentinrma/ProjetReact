import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const links = [
  { page: "Accueil", lien: "" },
  { page: "A propos", lien: "about" },
  { page: "CV", lien: "cv" },
  { page: "Contact", lien: "contact" },
  { page: "Portfolio", lien: "portfolio" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // déclare une variable d'état isOpen et une fonction setIsOpen pour la modifier

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <div className={isOpen ? "nav-links open " : "nav-links"}>
          {links.map((link, index) => (
            <Link key={index} to={`/${link.lien}`}>
              {link.page}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar; // exporte le composant Navbar
