import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const initialProducts = [
  { id: 1, name: "Polera 'Eclipse'", price: 21990, image: "https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", description: "Polera de algodón orgánico con un diseño minimalista de eclipse. Corte ajustado y tela suave al tacto." },
  { id: 2, name: "Polerón 'Nocturne'", price: 34990, image: "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", description: "Polerón con capucha de material premium. Interior afelpado para máximo confort en las noches frías." },
  { id: 3, name: "Gorro 'Abyss'", price: 15990, image: "https://images.unsplash.com/photo-1466992133056-ae8de8e22809?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1508", description: "Gorro de lana tejido con doble capa para mayor calidez. El accesorio esencial para un look discreto y urbano." },
  { id: 4, name: "Pantalón 'Shadow'", price: 35990, oldPrice: 42990, onSale: true, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026", description: "Pantalón cargo de tela técnica repelente al agua. Múltiples bolsillos y correas ajustables para un fit perfecto." },
  { id: 5, name: "Polera 'Umbra'", price: 21990, image: "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880", description: "Diseño oversize con hombros caídos. Fabricada en algodón grueso para una mayor durabilidad y estilo." },
  { id: 6, name: "Polerón 'Void'", price: 24990, oldPrice: 29990, onSale: true, image: "https://images.unsplash.com/photo-1678354885631-2c3433f3aab4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685", description: "Un polerón clásico de cuello redondo, sin capucha. Cómodo, versátil y con un logo sutil bordado en el pecho." }
];

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const addProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, { ...newProduct, id: Date.now() }]);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const resetData = () => {
        setProducts(initialProducts);
    };

    return (
        <DataContext.Provider value={{ products, addProduct, deleteProduct, resetData }}>
        {children}
        </DataContext.Provider>
    );
};