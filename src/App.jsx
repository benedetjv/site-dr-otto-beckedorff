import React from "react";
import { siteContent } from "./content";

function App() {
  const { header, contato, localizacao } = siteContent;

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <header className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          <a className="navbar-brand titulo-destaque" href="#home">
            {header.logoText}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <nav className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto">
              {header.menu.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        {/* Seção Agende Agora */}
        <section id="home" className="bg-light">
          <div className="container text-center">
            <p className="text-muted mb-3">Agende agora:</p>

            <div className="d-flex justify-content-center">
              <div className="card shadow-sm p-3" style={{ maxWidth: 360 }}>
                {/* Substitua isso pelo widget real da Doctoralia */}
                <p className="mb-0">[Widget Doctoralia]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato">
          <div className="container text-center">
            <h2 className="mb-4">{contato.titulo}</h2>

            <p className="mb-1">{contato.endereco}</p>
            <p className="text-muted mb-4">{contato.whatsappLabel}</p>

            <a
              href={contato.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp px-4"
            >
              WHATSAPP
            </a>
          </div>
        </section>

        {/* Seção Localização */}
        <section id="localizacao" className="bg-light">
          <div className="container text-center">
            <h2 className="mb-4">{localizacao.titulo}</h2>

            <p className="mb-2">
              <a
                href={localizacao.enderecoLinkUrl}
                target="_blank"
                rel="noreferrer"
              >
                {localizacao.enderecoLinkLabel}
              </a>
            </p>

            <a
              href={localizacao.wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark mb-4"
            >
              WAZE
            </a>

            <div className="d-flex justify-content-center">
              <div className="instagram-wrapper">
                {/* Cole aqui o embed do Instagram */}
                <p>[Feed do Instagram]</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-3 text-center mt-auto">
        <div className="container">
          <small>
            Dr. Otto Beckedorff · Ortopedia &amp; Tratamento da Dor · CRM
            123456/SP
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
