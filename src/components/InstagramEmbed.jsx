import React, { useEffect } from "react";
import { instagramConfig } from "../content";

const SCRIPT_ID = "instagram-embed-script";

function InstagramEmbed() {
  useEffect(() => {
    const existingScript = document.getElementById(SCRIPT_ID);

    const triggerParse = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      }
    };

    if (existingScript) {
      triggerParse();
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = triggerParse;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-wrapper">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={instagramConfig.profileUrl}
        data-instgrm-version="14"
        style={{ background: "none", border: 0, boxShadow: "none" }}
      ></blockquote>
    </div>
  );
}

export default InstagramEmbed;
