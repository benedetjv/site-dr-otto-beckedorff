import React from "react";
import {
  HeroSection,
  AgendeSection,
  ServicosSection,
  SobreSection,
  HighlightsSection,
  ContatoSection,
  LocalizacaoSection,
  BlogSection,
} from "../components/sections";

function Home() {
  return (
    <>
      <HeroSection />
      <AgendeSection />
      <ServicosSection />
      <SobreSection />
      <HighlightsSection />
      <ContatoSection />
      <LocalizacaoSection />
      <BlogSection />
    </>
  );
}

export default Home;
