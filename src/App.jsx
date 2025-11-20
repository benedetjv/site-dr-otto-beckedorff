import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Sobre, Servicos, Localizacao, Contato, Blog } from "./pages";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="localizacao" element={<Localizacao />} />
          <Route path="contato" element={<Contato />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
