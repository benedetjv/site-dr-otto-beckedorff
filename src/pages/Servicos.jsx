import React from "react";
import { services } from "../content";

function Servicos() {
  return (
    <section className="section-light" id="servicos">
      <div className="container">
        <div className="section-header text-center mb-4">
          <p className="text-muted mb-2">Protocolos personalizados</p>
          <h1 className="section-title mb-0">Como posso te ajudar?</h1>
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
      </div>
    </section>
  );
}

export default Servicos;
