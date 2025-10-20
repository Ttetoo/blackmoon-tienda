import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import ProductCard from '../components/ProductCard';

function ShopPage() {
  const { products } = useContext(DataContext); 

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;