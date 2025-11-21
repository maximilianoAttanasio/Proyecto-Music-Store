import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstrumentosPage from "./pages/InstrumentosPage";
import DetalleInstrumentoPage from "./pages/DetalleInstrumentoPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./NotFound";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instrumentos" element={<InstrumentosPage />} />
        <Route path="/instrumentos/:categoria" element={<InstrumentosPage />} />
        <Route path="/instrumento/:id" element={<DetalleInstrumentoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
