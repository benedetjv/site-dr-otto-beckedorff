import React from "react";
import { blogContent } from "../content";

function Blog() {
  return (
    <section className="section-light" id="blog">
      <div className="container text-center">
        <div className="section-header mb-3">
          <p className="text-muted mb-2">Conteúdo especializado</p>
          <h1 className="section-title mb-0">{blogContent.title}</h1>
        </div>
        <p className="lead text-muted">{blogContent.description}</p>
      </div>
    </section>
  );
}

export default Blog;
