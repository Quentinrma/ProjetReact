import React from "react";
import { Link } from "react-router-dom";

let links = [
  { page: "Accueil", lien: "" },
  { page: "A propos", lien: "About" },
  { page: "CV", lien: "CV" },
  { page: "Contact", lien: "contact" },
  { page: "Porfolio", lien: "portfolio" },
];
function Footer() {
  return (
    <div>
      <footer>
        <div>
          <ul id="nav">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={`/${link.lien.toLowerCase()}`}>{link.page}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>© 2025 Quentin.rma Tous droits réservés.</div>
      </footer>
    </div>
  );
}

export default Footer;
