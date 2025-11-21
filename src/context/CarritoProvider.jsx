import React from "react";
import { createContext, useState } from "react";

export const CarritoContext = createContext();

function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  function addItem(producto, cantidad) {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      const actualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  }

  function removeItem(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCarrito([]);
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        totalUnidades,
        totalPrecio,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;
