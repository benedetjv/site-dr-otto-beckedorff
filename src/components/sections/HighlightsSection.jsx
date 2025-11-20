import React from "react";
import { highlightLists } from "../../content";

function HighlightsSection() {
  return (
    <section className="section-light">
      <div className="container">
        <div className="row g-4">
          {highlightLists.map((block) => (
            <div className="col-lg-4 col-md-6 lista-coluna bloco-lista" key={block.title}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
