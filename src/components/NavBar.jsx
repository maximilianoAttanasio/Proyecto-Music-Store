import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Navbar">
      <p className="logo">Los Tecnonautas</p>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/instrumentos">Instrumentos</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
