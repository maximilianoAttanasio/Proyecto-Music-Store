import React from "react";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import ItemDetail from "./ItemDetail";
import { fetchInstrumentoAsync } from "../utils/FuncionesApi";

function ItemDetailContainer({ id }) {
  const [instrumento, setInstrumento] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerInstrumento = async () => {
      try {
        const data = await fetchInstrumentoAsync(id);
        setInstrumento(data);
      } catch (error) {
        console.error("Error al obtener el instrumento:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerInstrumento();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!instrumento) return <NotFound mensaje="Instrumento no encontrado" />;

  return <ItemDetail instrumento={instrumento} />;
}

export default ItemDetailContainer;
