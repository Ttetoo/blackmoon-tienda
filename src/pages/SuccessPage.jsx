import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => (
  <div className="container py-5 text-center">
    <h1 className="display-4 text-success">✓ Pago Realizado con Éxito</h1>
    <p className="lead">Tu orden ha sido procesada. Recibirás un correo con los detalles.</p>
    <Link to="/tienda" className="btn btn-primary mt-3">
      Volver a la Tienda
    </Link>
  </div>
);
export default SuccessPage;