import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { brand, navLinks } from "../content";
import logo from "../../img/logo-otto-beckedorff.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Navegação principal">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt={brand.logoAlt} className="logo-img" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Alternar menu"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav">
              {navLinks.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
