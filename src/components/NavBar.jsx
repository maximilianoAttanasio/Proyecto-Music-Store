import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "antd";

function NavBar() {
  const items = [
    {
      key: "todos",
      label: <Link to="/instrumentos">Todos los Instrumentos</Link>,
    },
    {
      key: "amplificadores",
      label: <Link to="/instrumentos/amplificadores">Amplificadores</Link>,
    },
    {
      key: "audio",
      label: <Link to="/instrumentos/audio">Audio</Link>,
    },
    {
      key: "cuerdas",
      label: <Link to="/instrumentos/cuerdas">Cuerdas</Link>,
    },
    {
      key: "percusion",
      label: <Link to="/instrumentos/percusion">Percusión</Link>,
    },
    {
      key: "teclados",
      label: <Link to="/instrumentos/teclados">Teclados</Link>,
    },
    {
      key: "viento",
      label: <Link to="/instrumentos/viento">Viento</Link>,
    },
  ];

  return (
    <nav className="Navbar">
      <NavLink to="/">Inicio</NavLink>

      <Dropdown menu={{ items }}>
        <span className="navbar-link">Instrumentos</span>
      </Dropdown>

      <NavLink to="/contacto">Contacto</NavLink>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
