import React from "react";
import { contactContent } from "../../content";

function ContatoSection() {
  return (
    <section id="contato" className="section-soft">
      <div className="container">
        <h2 className="section-title">Contato</h2>

        <div className="row justify-content-center mb-3 contato-grid">
          {contactContent.clinics.map((clinic, index) => (
            <div
              className={`col-md-5 contato-item ${
                index === 0 ? "text-md-end text-center" : "text-md-start text-center"
              }`}
              key={clinic.name}
            >
              <h4 className="contato-clinic">{clinic.name}</h4>
              <p className="contato-endereco">{clinic.address}</p>
              <p className="contato-phone">
                <i className={`bi ${clinic.icon}`} aria-hidden="true"></i>{" "}
                <strong>{clinic.phoneLabel}</strong>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center contato-actions">
          {contactContent.buttons.map((button) => (
            <a
              key={button.label}
              href={button.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <i className={`bi ${button.icon}`} aria-hidden="true"></i> {button.label}
            </a>
          ))}
        </div>

        <p className="text-center text-muted mt-4">{contactContent.note}</p>
      </div>
    </section>
  );
}

export default ContatoSection;
