import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Procesando pago...");

    if (Math.random() < 0.7) {
      navigate('/success');
    } else {
      navigate('/error');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Carrito de compra</h2>
      <p>Completa la siguiente información para finalizar tu compra.</p>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handlePayment}>
            <h4>Información del cliente</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="apellidos" required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input type="email" className="form-control" id="correo" required />
            </div>

            <h4 className="mt-4">Dirección de entrega de los productos</h4>
            <div className="mb-3">
              <label htmlFor="calle" className="form-label">Calle</label>
              <input type="text" className="form-control" id="calle" required />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="region" className="form-label">Región</label>
                <input type="text" className="form-control" id="region" defaultValue="Región Metropolitana de Santiago" readOnly />
              </div>
              <div className="col-md-6">
                <label htmlFor="comuna" className="form-label">Comuna</label>
                <input type="text" className="form-control" id="comuna" required />
              </div>
            </div>
            <hr className="my-4" />
            <button type="submit" className="w-100 btn btn-primary btn-lg">
              {`Pagar ahora $${new Intl.NumberFormat('es-CL').format(total)}`}
            </button>
          </form>
        </div>

        <div className="col-md-4">
            <h4>Resumen del Carrito</h4>
            <ul className="list-group mb-3">
                {cart.map(product => (
                  <li key={product.id} className="list-group-item d-flex justify-content-between">
                    <span>{product.name} {product.size && `(Talla: ${product.size})`}</span>
                    {/* ESTA ES LA LÍNEA CORREGIDA */}
                    <strong>{`$${new Intl.NumberFormat('es-CL').format(product.price)}`}</strong>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>{`$${new Intl.NumberFormat('es-CL').format(total)}`}</strong>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;