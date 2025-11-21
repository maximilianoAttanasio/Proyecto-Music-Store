import { Badge } from "antd";
import { ShoppingCart } from "lucide-react";
import useCarrito from "../hooks/useCarrito";
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { totalUnidades } = useCarrito();
  const navigate = useNavigate();

  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      <Badge count={totalUnidades}>
        <ShoppingCart size={24} className="cart-widget-icon" />
      </Badge>
    </div>
  );
}

export default CartWidget;
