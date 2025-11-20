import React from "react";
import { contactContent } from "../content";

function Contato() {
  return (
    <section className="section-soft" id="contato">
      <div className="container">
        <div className="section-header text-center mb-4">
          <p className="text-muted mb-2">Fale com a equipe</p>
          <h1 className="section-title mb-0">Contato</h1>
        </div>

        <div className="row justify-content-center mb-4 contato-grid g-4">
          {contactContent.clinics.map((clinic) => (
            <div className="col-md-5 contato-item text-center" key={clinic.name}>
              <h4 className="contato-clinic">{clinic.name}</h4>
              <p className="contato-endereco">{clinic.address}</p>
              {clinic.whatsapp && (
                <p className="contato-phone">
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>{" "}
                  <strong>{clinic.whatsapp}</strong>
                </p>
              )}
              {clinic.phone && (
                <p className="contato-phone">
                  <i className="bi bi-telephone-fill" aria-hidden="true"></i>{" "}
                  <strong>{clinic.phone}</strong>
                </p>
              )}
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
              <i className="bi bi-whatsapp" aria-hidden="true"></i> {button.label}
            </a>
          ))}
        </div>

        <p className="text-center text-muted mt-4">{contactContent.note}</p>
      </div>
    </section>
  );
}

export default Contato;
