import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // <-- Importar MemoryRouter
import { CartProvider } from '../context/CartContext'; // <-- Importar CartProvider
import Header from './Header';

describe('Header Component', () => {
  it('debería mostrar el nombre de la marca BlackMoon', () => {
    // Ahora envolvemos el Header con los proveedores que necesita
    render(
      <CartProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartProvider>
    );

    const brandElement = screen.getByText('BlackMoon');
    expect(brandElement).toBeInTheDocument();
  });
});