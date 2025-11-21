import React from "react";
import useCarrito from "../../hooks/useCarrito";
import { Button, Card } from "antd";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { carrito, totalUnidades, totalPrecio, removeItem, clearCart, addItem } = useCarrito();
  const navigate = useNavigate();

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Carrito vacío</h2>
        <Link to="/instrumentos" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>

      {carrito.map((item) => (
        <Card key={item.id} className="cart-item-card">
          <div className="cart-item">
            <img
              src={item.imagen}
              alt={item.nombre}
              className="cart-item-img"
            />

            <div className="cart-item-info">
              <h3>{item.nombre}</h3>
              <p>${item.precio}</p>

              <div className="cart-quantity-controls">
                <Button
                  size="small"
                  icon={<Minus size={14} />}
                  onClick={() => addItem(item, -1)}
                  disabled={item.cantidad === 1}
                />

                <span>{item.cantidad}</span>

                <Button
                  size="small"
                  icon={<Plus size={14} />}
                  onClick={() => addItem(item, 1)}
                  disabled={item.cantidad >= item.stock}
                />
              </div>
            </div>

            <div className="cart-item-subtotal">
              <p>Subtotal: ${item.precio * item.cantidad}</p>

              <Button
                danger
                icon={<Trash2 size={16} />}
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <h3>Total unidades: {totalUnidades}</h3>
      <h3>Total a pagar: ${totalPrecio}</h3>

      <div className="cart-actions">
        <Button danger onClick={clearCart}>Vaciar carrito</Button>
        <Button type="primary" onClick={() => navigate("/checkout")}>Ir a Checkout</Button>
      </div>
    </div>
  );
}

export default CartPage;
