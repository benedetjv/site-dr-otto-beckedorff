import React from "react";
import { siteContent } from "../content";

export default function Contato() {
  const { titulo, endereco, whatsappLabel, whatsappLink } = siteContent.contato;

  return (
    <section id="contato">
      <div className="container text-center">
        <h2 className="mb-4">{titulo}</h2>

        <p className="mb-1">{endereco}</p>
        <p className="text-muted mb-4">{whatsappLabel}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp px-4"
        >
          WHATSAPP
        </a>
      </div>
    </section>
  );
}
