import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si no hay un usuario logueado, redirige a la página de login.
    return <Navigate to="/login" />;
  }

  // Si hay un usuario, muestra el componente que está protegiendo (la página de admin).
  return children;
};

export default ProtectedRoute;