import React from "react";
import "./Styles/Home.css";
import "./App.css";
import ReactLogo from "./images/React.png";
function Home() {
  return (
    <div>
      <main className="Home">
        <section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Bienvenue sur mon projet React </h2>
            <img
              className="rotate"
              style={{ width: "30px", objectFit: "contain", padding: "10px" }}
              src={ReactLogo}
              alt=""
            />
          </div>
          <div id="Intro">
            <p>
              Vous trouverez ici mon projet <strong>React</strong>, mettant en
              valeur mes compétences en développement et conception web.
              N'hésitez pas à explorer l'application.
            </p>
            <p>
              À noter :
              <em>
                Le site n'est pas encore terminé et il est susceptible de
                changer régulièrement. Merci de votre compréhension et de votre
                patience pendant que je continue à l'améliorer en y ajoutant des
                fonctionnalités.
              </em>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
