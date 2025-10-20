import React, { useState, useEffect, useContext } from 'react'; // <-- ARREGLADO AQUÍ
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext'; // Usamos DataContext para encontrar el producto
import { CartContext } from '../context/CartContext';

function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useContext(DataContext); // Obtenemos la lista de productos del contexto
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div className="container py-5">Cargando producto...</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona una talla.");
      return;
    }
    const productToAdd = { ...product, size: selectedSize };
    addToCart(productToAdd);
    alert(`${product.name} (Talla: ${selectedSize}) fue añadido al carrito.`);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h2>${new Intl.NumberFormat('es-CL').format(product.price)}</h2>
          <hr />
          <div className="d-flex flex-column">
            <strong>Selecciona tu talla:</strong>
            <div className="btn-group my-3" role="group">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  type="button"
                  className={`btn ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              className="btn btn-primary btn-lg mt-2"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              {selectedSize ? 'Añadir al carrito' : 'Selecciona una talla'}
            </button>
          </div>
          <Link to="/tienda" className="btn btn-secondary mt-4">Volver a la tienda</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;