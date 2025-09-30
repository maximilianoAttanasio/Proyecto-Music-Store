import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="Navbar">
      <p className="logo">Los Tecnonautas</p>
      <ul className="Nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
