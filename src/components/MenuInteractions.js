import React, { useEffect } from "react";
import "../Styles/MenuInteractions.css";
import LogoLune from "../images/lune.svg";
function MenuInteractions() {
  useEffect(() => {
    const handleDarkModeToggle = () => {
      if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    const darkModeButton = document.getElementById("darkmode");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", handleDarkModeToggle);
    }

    return () => {
      if (darkModeButton) {
        darkModeButton.removeEventListener("click", handleDarkModeToggle);
      }
    };
  }, []);
  // -----------------------

  const topFunction = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="MenuInteractions">
        <button id="darkmode">
          <img src={LogoLune} alt="" />
        </button>
      </div>
      <button id="Topbutton" onClick={topFunction}>
        ↑
      </button>
    </div>
  );
}

export default MenuInteractions;
