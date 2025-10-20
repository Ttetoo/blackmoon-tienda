import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="container py-5 text-center">
    <h1 className="display-4 text-danger">✗ No se pudo realizar el pago</h1>
    <p className="lead">Hubo un problema al procesar tu pago. Por favor, intenta de nuevo.</p>
    <Link to="/checkout" className="btn btn-warning mt-3">
      Volver a Intentar el Pago
    </Link>
  </div>
);
export default ErrorPage;