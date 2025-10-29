import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ instrumento }) {
  const [contador, setContador] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const handleAumentar = () => {
    if (contador < instrumento.stock) {
      setContador(contador + 1);
    }
  };

  const handleDisminuir = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    setMensaje(`Agregaste ${contador} ${instrumento.nombre} al carrito`);
    setTimeout(() => setMensaje(""), 5000);
  };

  return (
    <div className="intrumento-container">
      <div className="instrumento-detail">
        <img src={instrumento.imagen} alt={instrumento.nombre} />
        <div className="instrumento-info">
          <h2>{instrumento.nombre}</h2>
          <p>Categoría: {instrumento.categoria}</p>
          <p>Precio: ${instrumento.precio}</p>
          <p>Stock: {instrumento.stock}</p>
          <div className="item-count">
            <div className="count-controls">
              <button onClick={handleDisminuir}>-</button>
              <span>{contador}</span>
              <button onClick={handleAumentar}>+</button>
            </div>
            <button className="btn btn-secondary" onClick={handleAgregarAlCarrito}>
              Agregar al carrito
            </button>
            {mensaje && <p className="mensaje-carrito">{mensaje}</p>}
          </div>
        </div>
      </div>
        <Link to="/instrumentos" className="btn btn-primary">Volver al Catálogo</Link>
    </div>
  );
}

export default ItemDetail;
