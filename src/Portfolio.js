import React from "react";
import "./Styles/Portfolio.css";

import image1 from "./images/image.png";
const images = [image1, image1, image1, image1, image1, image1];
export default function Portfolio() {
  return (
    <div>
      <main>
        <section>
          <h2>Images</h2>
          <div className="Grid">
            {images.map((image, index) => (
              <img src={image} alt="" key={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
