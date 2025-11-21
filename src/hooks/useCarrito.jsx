import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider";

function useCarrito() {
  return useContext(CarritoContext);
}

export default useCarrito;
