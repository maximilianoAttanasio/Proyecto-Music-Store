import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { fetchInstrumentosAsync } from "../utils/FuncionesApi";

function ItemListContainer() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

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

  const instrumentosFiltrados =
    categoriaSeleccionada === "Todos"
      ? instrumentos
      : instrumentos.filter((item) => item.categoria === categoriaSeleccionada);

  const categorias = [
    "Todos",
    "Cuerdas",
    "Percusión",
    "Teclados",
    "Amplificadores",
    "Audio",
    "Viento",
  ];

  return (
    <div className="item-list-container">
      <h2>Catálogo de Instrumentos</h2>

      <div className="filtro-categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`categoria-boton ${
              categoriaSeleccionada === cat ? "activo" : ""
            }`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ItemList instrumentos={instrumentosFiltrados} />
    </div>
  );
}

export default ItemListContainer;
