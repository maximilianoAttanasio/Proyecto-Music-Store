import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer";

function DetalleInstrumentoPage() {
  const { id } = useParams();

  return (
    <>
      <h2>Detalle del Instrumento</h2>
      <ItemDetailContainer id={id} />
    </>
  );
}

export default DetalleInstrumentoPage;
