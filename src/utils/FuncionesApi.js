import { db } from "./FirebaseConfig";
import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";

export async function fetchInstrumentosAsync() {
  try {
    const instrumentosRef = collection(db, "instrumentos");
    const snapshot = await getDocs(instrumentosRef);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("Error al cargar los instrumentos:", error);
    throw error;
  } finally {
    console.log("Finalizó la carga.");
  }
}

export async function fetchInstrumentoAsync(id) {
  try {
    const docRef = doc(db, "instrumentos", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error("Instrumento no encontrado");
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error al cargar los instrumento:", error);
    throw error;
  } finally {
    console.log("Finalizó la carga del instrumento");
  }
}

export async function saveSale(data) {
  try {
    const ventasRef = collection(db, "ventas");
    const respuesta = await addDoc(ventasRef, data);
    return respuesta.id;
  } catch (error) {
    console.error("Error guardando venta:", error);
    throw error;
  }
}
