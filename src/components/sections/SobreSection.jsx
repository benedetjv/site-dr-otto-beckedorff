import React from "react";
import { aboutContent } from "../../content";
import aboutPhoto from "../../../img/otto-em-procedimento.jpg";

function SobreSection() {
  return (
    <section id="sobre" className="section-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="sobre-foto">
              <img src={aboutPhoto} alt="Dr. Otto Beckedorff em procedimento" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2>{aboutContent.heading}</h2>
            <p>
              <strong>{aboutContent.credential}</strong>
            </p>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreSection;
