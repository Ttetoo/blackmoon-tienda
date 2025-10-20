import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente para la tarjeta de cada producto
function ProductCard({ product }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            ${new Intl.NumberFormat('es-CL').format(product.price)}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal de la página
function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products.json')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al cargar los productos!", error);
      });
  }, []);

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">BlackMoon Apparel</h1>
            <p className="lead fw-normal text-white-50 mb-0">Estilo que define tu oscuridad</p>
          </div>
        </div>
      </header> 
      
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-white">Cargando productos...</p> 
            )}

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;