import React from "react";
import { aboutContent, highlightLists } from "../content";
import aboutPhoto from "../../img/otto-em-procedimento.webp";

function Sobre() {
  return (
    <>
      <section className="section-light" id="sobre">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="sobre-foto">
                <img
                  src={aboutPhoto}
                  alt="Dr. Otto Beckedorff em procedimento"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-muted text-uppercase fw-semibold mb-2">
                {aboutContent.title}
              </p>
              <h1 className="mb-3">{aboutContent.credential}</h1>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul className="about-list">
                {aboutContent.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="row g-4">
            {highlightLists.map((block) => (
              <div className="col-lg-4 col-md-6" key={block.title}>
                <div className="bloco-lista h-100">
                  <div className="lista-cabecalho text-center">
                    <i className={`bi ${block.icon} servico-icon`} aria-hidden="true"></i>
                    <h3 className="lista-coluna-titulo">{block.title}</h3>
                  </div>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
