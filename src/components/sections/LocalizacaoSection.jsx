import React from "react";
import { clinics } from "../../content";
import InstagramEmbed from "../InstagramEmbed";

function LocalizacaoSection() {
  return (
    <section id="localizacao" className="section-light">
      <div className="container">
        <h2 className="section-title">Localizações das Clínicas</h2>

        <div className="row g-4 justify-content-center">
          {clinics.map((clinic) => (
            <div className="col-lg-6" key={clinic.name}>
              <div className="clinic-card h-100">
                <h3 className="clinic-title">{clinic.name}</h3>
                <p className="clinic-address">{clinic.address}</p>
                <p className="text-muted">{clinic.city}</p>
                <div className="mapa-wrapper">
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

export default LocalizacaoSection;
