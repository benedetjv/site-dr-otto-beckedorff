import React from "react";
import { heroContent } from "../../content";
import heroPhoto from "../../../img/foto-otto.jpg";

function HeroSection() {
  return (
    <section className="hero-section section-light" id="home">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h1 className="hero-title">{heroContent.title}</h1>
            <p className="hero-text">
              <strong>{heroContent.subtitle}</strong>
            </p>
            {heroContent.intro.map((paragraph) => (
              <p className="hero-text" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <a href={heroContent.primaryCta.href} className="btn-primary-custom">
              {heroContent.primaryCta.label}
            </a>
          </div>
          <div className="col-lg-5">
            <div className="hero-photo">
              <img src={heroPhoto} alt={heroContent.photoAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
