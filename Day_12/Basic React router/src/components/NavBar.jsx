import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;