import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import ProductCard from '../components/ProductCard';

function OffersPage() {
  const { products } = useContext(DataContext);
  
  const onSaleProducts = products.filter(p => p.onSale === true);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Productos en Oferta</h1>
      {onSaleProducts.length > 0 ? (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {onSaleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No hay productos en oferta en este momento.</p>
      )}
    </div>
  );
}

export default OffersPage;