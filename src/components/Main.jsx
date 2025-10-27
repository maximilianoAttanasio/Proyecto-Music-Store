import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstrumentosPage from "./pages/InstrumentosPage";
import DetalleInstrumentoPage from "./pages/DetalleInstrumentoPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./NotFound";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instrumentos" element={<InstrumentosPage />} />
        <Route path="/instrumento/:id" element={<DetalleInstrumentoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
