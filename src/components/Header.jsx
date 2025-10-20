import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
// Ya no se necesita el AuthContext aquí

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">BlackMoon</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><NavLink className="nav-link" to="/tienda">Tienda</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/ofertas">Ofertas</NavLink></li> {/* <-- NUEVO LINK */}
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
          </ul>
          <Link className="btn btn-outline-light" to="/cart">
            <i className="bi-cart-fill me-1"></i>
            Carrito
            <span className="badge bg-light text-dark ms-1 rounded-pill">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;