import React from "react";
import DoctoraliaWidget from "../DoctoraliaWidget";

function AgendeSection() {
  return (
    <section id="agende" className="section-light">
      <div className="container">
        <div className="agende-wrapper">
          <p className="agende-label">Agende agora:</p>
          <DoctoraliaWidget />
        </div>
      </div>
    </section>
  );
}

export default AgendeSection;
