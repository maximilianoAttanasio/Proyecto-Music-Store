import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../utils/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    const obtenerInstrumentos = async () => {
      setLoading(true);

      try {
        const instrumentosRef = collection(db, "instrumentos");

        const consulta = categoria
          ? query(instrumentosRef, where("categoria", "==", categoria))
          : instrumentosRef;

        const snapshot = await getDocs(consulta);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setInstrumentos(data);
      } catch (error) {
        console.error("Error al obtener instrumentos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerInstrumentos();
  }, [categoria]);

  if (loading) return <p>Cargando instrumentos...</p>;

  return (
    <div className="item-list-container">
      <h2>{categoria ? `Categoría: ${categoria}` : "Catálogo de Instrumentos"}</h2>

      <ItemList instrumentos={instrumentos} />
    </div>
  );
}

export default ItemListContainer;
