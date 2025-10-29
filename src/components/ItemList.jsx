import React from "react";
import { Link } from "react-router-dom";

function ItemList({ instrumentos }) {
  return (
    <div className="instrumentos-list">
      {instrumentos.map((instrumento) => (
        <div key={instrumento.id} className="instrumento-card">
          <img src={instrumento.imagen} alt={instrumento.nombre} />
          <h3>{instrumento.nombre}</h3>
          <p>{instrumento.categoria}</p>
          <p>${instrumento.precio}</p>
          <Link to={`/instrumento/${instrumento.id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
