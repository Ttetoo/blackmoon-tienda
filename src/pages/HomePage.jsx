import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/LandingPage.css'; // Importamos los nuevos estilos

function HomePage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">BlackMoon Apparel</h1>
      <p className="landing-subtitle">Estilo que define tu oscuridad</p>
      <Link to="/tienda" className="btn btn-light landing-button">
        Ir a la Tienda
      </Link>
    </div>
  );
}

export default HomePage;