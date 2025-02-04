import React from "react";
import "./Styles/About.css";
import CarouselComponent from "./components/CarouselComponent";
function About() {
  return (
    <div>
      <main>
        <section className="About">
          <p className="NOM">Quentin.rma</p>

        </section>
        <section className="About">
          <CarouselComponent></CarouselComponent>
        </section>
      </main>
    </div>
  );
}

export default About;
