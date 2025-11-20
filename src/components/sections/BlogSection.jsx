import React from "react";
import { blogContent } from "../../content";

function BlogSection() {
  return (
    <section id="blog" className="section-light">
      <div className="container text-center">
        <h2 className="section-title">{blogContent.title}</h2>
        <p>{blogContent.description}</p>
      </div>
    </section>
  );
}

export default BlogSection;
