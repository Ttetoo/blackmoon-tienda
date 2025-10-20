import React, { createContext, useState } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Lógica para no añadir duplicados (opcional, pero buena práctica)
    setCart(prevCart => {
      const isProductInCart = prevCart.find(item => item.id === product.id);
      if (isProductInCart) {
        return prevCart; // Si ya está, no hacemos nada
      }
      return [...prevCart, product]; // Si no está, lo añadimos
    });
    console.log("Producto añadido:", product);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};