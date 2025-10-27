export async function fetchInstrumentosAsync() {
  try {
    const response = await fetch("/data/instrumentos.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar instrumentos:", error);
    throw error;
  } finally {
    console.log("Finalizó la carga de instrumentos");
  }
}

export async function fetchInstrumentoAsync(id) {
  try {
    const response = await fetch("/data/instrumentos.json");
    const data = await response.json();
    const instrumento = data.find((i) => i.id === parseInt(id));
    return instrumento || null;
  } catch (error) {
    console.error("Error al cargar instrumento:", error);
    throw error;
  } finally {
    console.log("Finalizó la carga del instrumento");
  }
}
