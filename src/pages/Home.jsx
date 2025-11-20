import React from "react";
import { Link } from "react-router-dom";
import { heroContent, quickLinks } from "../content";
import DoctoraliaWidget from "../components/DoctoraliaWidget";
import heroPhoto from "../../img/foto-otto.webp";

function Home() {
  return (
    <>
      <section className="hero-section section-light" id="home">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-badge">{heroContent.badge}</div>
              <h1 className="hero-title">{heroContent.title}</h1>
              {heroContent.paragraphs.map((paragraph, index) => (
                <p className="hero-text" key={index}>
                  {paragraph}
                </p>
              ))}
              <div className="d-flex flex-wrap gap-3">
                {heroContent.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    to={cta.to}
                    className={`btn-primary-custom ${
                      cta.variant === "outline" ? "btn-outline" : ""
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-photo shadow-sm">
                <img src={heroPhoto} alt="Dr. Otto Beckedorff" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <DoctoraliaWidget />
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="section-header text-center mb-4">
            <p className="text-muted mb-2">Explore</p>
            <h2 className="section-title mb-0">Escolha a próxima etapa</h2>
          </div>
          <div className="row g-4 quick-links-grid">
            {quickLinks.map((card) => (
              <div className="col-md-4" key={card.path}>
                <div className="quick-link-card h-100">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link to={card.path} className="stretched-link">
                    Acessar página
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
