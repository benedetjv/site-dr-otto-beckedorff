import React, { useEffect } from "react";
import { doctoraliaConfig } from "../content";

function DoctoraliaWidget() {
  useEffect(() => {
    if (document.getElementById(doctoraliaConfig.widgetId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = doctoraliaConfig.widgetId;
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="doctoralia-card">
      <a
        id="zl-url"
        className="zl-url"
        href={doctoraliaConfig.href}
        rel="nofollow noopener"
        data-zlw-doctor={doctoraliaConfig.doctor}
        data-zlw-type={doctoraliaConfig.widgetType}
        data-zlw-opinion={String(doctoraliaConfig.opinions)}
        data-zlw-hide-branding={String(doctoraliaConfig.hideBranding)}
        data-zlw-saas-only={String(doctoraliaConfig.saasOnly)}
        data-zlw-a11y-title="Widget de marcação de consultas médicas"
      >
        Otto Beckedorff - Doctoralia.com.br
      </a>
    </div>
  );
}

export default DoctoraliaWidget;
