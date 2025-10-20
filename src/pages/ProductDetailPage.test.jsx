import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { DataContext } from '../context/DataContext';
import ProductDetailPage from './ProductDetailPage';

const mockProducts = [{ id: 1, name: "Test Product", price: 100, image: "url", description: "desc" }];
const mockAddToCart = vi.fn();

describe('ProductDetailPage Component', () => {
  it('debería llamar a la función addToCart al hacer clic en el botón (después de seleccionar talla)', () => {
    render(
      <DataContext.Provider value={{ products: mockProducts }}>
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <MemoryRouter initialEntries={['/product/1']}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetailPage />} />
            </Routes>
          </MemoryRouter>
        </CartContext.Provider>
      </DataContext.Provider>
    );

    // Simula el evento de seleccionar una talla
    const sizeButton = screen.getByText('M');
    fireEvent.click(sizeButton);

    // Simula el evento de hacer clic en el botón de añadir
    const addButton = screen.getByText('Añadir al carrito');
    fireEvent.click(addButton);

    // Verifica que la función addToCart fue llamada
    expect(mockAddToCart).toHaveBeenCalled();
  });
});