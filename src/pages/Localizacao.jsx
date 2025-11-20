import React from "react";
import { clinics } from "../content";
import InstagramEmbed from "../components/InstagramEmbed";

function Localizacao() {
  return (
    <section className="section-light" id="localizacao">
      <div className="container">
        <div className="section-header text-center mb-4">
          <p className="text-muted mb-2">Estruturas completas</p>
          <h1 className="section-title mb-0">Localizações das clínicas</h1>
        </div>

        <div className="row g-4">
          {clinics.map((clinic) => (
            <div className="col-lg-6" key={clinic.name}>
              <div className="clinic-card h-100">
                <h3 className="clinic-title">{clinic.name}</h3>
                <p className="clinic-address">{clinic.address}</p>
                <p className="text-muted mb-3">{clinic.city}</p>

                <div className="mapa-wrapper mb-3">
                  <iframe
                    src={clinic.mapUrl}
                    title={`Mapa da ${clinic.name}`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a href={clinic.wazeUrl} target="_blank" rel="noreferrer" className="btn btn-waze">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true"></i> Waze
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <InstagramEmbed />
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
