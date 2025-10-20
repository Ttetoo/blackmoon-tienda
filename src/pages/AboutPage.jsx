import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4">Sobre Nosotros</h1>
            <p className="lead text-muted mb-0">BlackMoon no es solo una marca, es una declaración. Nacimos de la noche, inspirados por la elegancia de las sombras y la calma de un cielo sin estrellas.</p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img 
              src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Ropa de BlackMoon" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img 
                src="https://images.pexels.com/photos/4937222/pexels-photo-4937222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Proceso de diseño" 
                className="img-fluid mb-4 mb-lg-0 rounded"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Nuestra Filosofía</h2>
              <p className="font-italic text-muted mb-4">Creemos que el estilo es una forma de expresión personal, una armadura para el día a día. Por eso, cada una de nuestras prendas está diseñada pensando en la atemporalidad y la durabilidad. No seguimos tendencias pasajeras; creamos piezas que te acompañarán durante años.</p>
              <Link to="/tienda" className="btn btn-dark px-5 rounded-pill shadow-sm">
                Explora la Colección
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;