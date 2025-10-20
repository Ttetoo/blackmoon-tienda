import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {product.onSale && <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Oferta</div>}

        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img 
            className="card-img-top" 
            src={product.image} 
            alt={product.name} 
            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{product.name}</h5>
              {product.onSale && product.oldPrice ? (
                <div>
                  <span className="text-muted text-decoration-line-through">
                    {`$${new Intl.NumberFormat('es-CL').format(product.oldPrice)}`}
                  </span>
                  {` $${new Intl.NumberFormat('es-CL').format(product.price)}`}
                </div>
              ) : (
                `$${new Intl.NumberFormat('es-CL').format(product.price)}`
              )}
            </div>
          </div>
        </Link>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link to={`/product/${product.id}`} className="btn btn-outline-dark mt-auto me-2">
              Ver Detalles
            </Link>
            <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;