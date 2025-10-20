import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="lead">Tu carrito está vacío.</p>
          <Link to="/tienda" className="btn btn-primary">
            Seguir Comprando
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-group">
              {cart.map(product => (
                <li key={`${product.id}-${product.size}`} className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img src={product.image} alt={product.name} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-5">
                      <h5 className="mb-0">{product.name}</h5>
                      {product.size && <small className="text-muted">Talla: {product.size}</small>}
                    </div>
                    <div className="col-md-3 text-end">
                      <strong>{`$${new Intl.NumberFormat('es-CL').format(product.price)}`}</strong>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Resumen del Pedido</h4>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>{`$${new Intl.NumberFormat('es-CL').format(total)}`}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold mt-2">
                  <span>Total</span>
                  <span>{`$${new Intl.NumberFormat('es-CL').format(total)}`}</span>
                </div>
                <hr />
                <div className="d-grid gap-2">
                  <Link to="/checkout" className="btn btn-primary">
                    Finalizar Pedido
                  </Link>
                  <Link to="/tienda" className="btn btn-outline-secondary">
                    Seguir Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Esta es la línea que probablemente faltaba
export default CartPage;