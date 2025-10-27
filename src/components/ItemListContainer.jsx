import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { fetchInstrumentosAsync } from "../utils/FuncionesApi";

function ItemListContainer() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerInstrumento = async () => {
      try {
        const data = await fetchInstrumentosAsync();
        setInstrumentos(data);
      } catch (error) {
        console.error("Error al obtener lista de instrumentos", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerInstrumento();
  }, []);

  if (loading) return <p>Cargando instrumentos...</p>;

  return <ItemList instrumentos={instrumentos} />;
}

export default ItemListContainer;
