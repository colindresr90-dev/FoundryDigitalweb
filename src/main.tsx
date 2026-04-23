import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/index";
import ServiciosPage from "./routes/servicios";
import NosotrosPage from "./routes/nosotros";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
