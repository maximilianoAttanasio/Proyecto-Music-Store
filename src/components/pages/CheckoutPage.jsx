import { Mail, Phone, User } from "lucide-react";
import { Button, Flex, Input, Card } from "antd";
import { useRef, useState } from "react";
import { saveSale } from "../../utils/FuncionesApi";
import { serverTimestamp } from "firebase/firestore";
import useCarrito from "../../hooks/useCarrito";

function CheckoutPage() {
  const [id, setId] = useState(null);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const { carrito, totalPrecio, clearCart } = useCarrito();

  function handleConfirmarCompra(evt) {
    evt.preventDefault();

    const nombre = nameRef.current.input.value;
    const telefono = phoneRef.current.input.value;
    const email = emailRef.current.input.value;

    if (!nombre || !telefono || !email) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const venta = {
      usuario: { nombre, telefono, email },
      fecha: serverTimestamp(),
      productos: carrito,
      total: totalPrecio,
    };

    saveSale(venta)
      .then((idGenerado) => {
        clearCart();
        setId(idGenerado);
      })
      .catch(console.error);
  }

  if (id !== null) {
    return (
      <div className="checkout-success-card">
        <h2>Gracias por su compra.</h2>
        <p className="checkout-ticket">Ticket: <strong>{id}</strong></p>
      </div>
    );
  }

  return (
    <Card className="checkout-card">
      <h2 className="checkout-title">Checkout</h2>

      <form onSubmit={handleConfirmarCompra} className="checkout-form">
        <Flex gap={12} vertical>
          <Input
            placeholder="Nombre"
            prefix={<User size={16} />}
            ref={nameRef}
          />
          <Input
            placeholder="Teléfono"
            prefix={<Phone size={16} />}
            ref={phoneRef}
          />
          <Input
            placeholder="Email"
            prefix={<Mail size={16} />}
            ref={emailRef}
          />
        </Flex>

        <Button type="primary" htmlType="submit" className="checkout-submit">
          Confirmar compra
        </Button>
      </form>
    </Card>
  );
}

export default CheckoutPage;
