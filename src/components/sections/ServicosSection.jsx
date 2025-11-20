import React from "react";
import { services } from "../../content";

function ServicosSection() {
  return (
    <section id="servicos" className="section-light">
      <div className="container">
        <h2 className="section-title">Como posso te ajudar?</h2>
      </div>
      <div className="servicos-grid">
        <div className="servicos-grid-inner">
          <div className="row g-0">
            {services.map((service) => (
              <div className="col-md-4 servico-card" key={service.title}>
                <div className="servico-card-inner">
                  <i className={`bi ${service.icon} servico-icon-custom`} aria-hidden="true"></i>
                  <h3 className="servico-titulo">{service.title}</h3>
                  <p className="servico-descricao">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicosSection;
