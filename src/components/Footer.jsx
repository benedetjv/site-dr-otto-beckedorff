import React from "react";
import { brand } from "../content";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <p className="mb-0">
          © {currentYear} · {brand.name} – {brand.tagline}. Todos os direitos
          reservados.
        </p>
        <small className="rodape-crm">CRM 2263255SP · RQE 139078</small>
      </div>
    </footer>
  );
}

export default Footer;
