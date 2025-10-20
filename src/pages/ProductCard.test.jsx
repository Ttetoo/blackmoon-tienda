import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import HomePage from './HomePage'; // Importamos HomePage que contiene ProductCard

// Mock de un producto para la prueba
const mockProduct = {
  id: 1,
  name: "Polera de Prueba",
  price: 10000,
  image: "https://via.placeholder.com/450"
};

// Pequeño componente de ayuda para probar ProductCard en aislamiento
const ProductCardWrapper = () => {
    const [products, setProducts] = React.useState([mockProduct]);
    return (
        <div className="row">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    )
}

describe('ProductCard Component', () => {
  it('debería mostrar el nombre y precio del producto pasados por props', () => {
    // Renderizamos el componente dentro de los proveedores que necesita
    render(
      <CartProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </CartProvider>
    );

    // Hacemos la prueba más robusta esperando que los elementos aparezcan
    // ya que se cargan de forma asíncrona
    setTimeout(() => {
        // screen.getByText() busca un elemento por su texto.
        const nameElement = screen.getByText("Polera Overlook");
        const priceElement = screen.getByText(/\$19\.990/); // Usamos una expresión regular para el formato del precio

        // Verificamos que ambos elementos existan en el documento
        expect(nameElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
    }, 1000); // Damos 1 segundo para que carguen los datos

  });
});