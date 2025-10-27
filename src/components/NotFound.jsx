import React from "react";
import { Link } from "react-router-dom";

function NotFound({ mensaje = "La página que buscas no existe" }) {
  return (
    <div className="notfound-container">
      <h2 className="notfound-title">404</h2>
      <p className="notfound-text">{mensaje}</p>
      <Link to="/" className="notfound-link">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
