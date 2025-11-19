import React from "react";
import { siteContent } from "../content";

export default function Localizacao() {
  const { titulo, enderecoLinkLabel, enderecoLinkUrl, wazeUrl } =
    siteContent.localizacao;

  return (
    <section id="localizacao" className="bg-light">
      <div className="container text-center">
        <h2 className="mb-4">{titulo}</h2>

        <p className="mb-2">
          <a href={enderecoLinkUrl} target="_blank" rel="noreferrer">
            {enderecoLinkLabel}
          </a>
        </p>

        <a
          href={wazeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark mb-4"
        >
          WAZE
        </a>

        <div className="d-flex justify-content-center">
          <div className="instagram-wrapper">
            {/* Cole aqui o embed do Instagram (código gerado pelo próprio Instagram) */}
            <p>[Feed do Instagram]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
