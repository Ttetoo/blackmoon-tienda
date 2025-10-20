import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

function AdminPage() {
  const { products, addProduct, deleteProduct, resetData } = useContext(DataContext);

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const priceAsNumber = parseFloat(newPrice);
    if (newName && !isNaN(priceAsNumber) && newImage) {
      addProduct({ name: newName, price: priceAsNumber, image: newImage, description: "Nueva descripción." });
      // Limpiar el formulario
      setNewName('');
      setNewPrice('');
      setNewImage('');
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel de Administración</h1>
        <button className="btn btn-secondary" onClick={resetData}>
          Restaurar Datos Iniciales
        </button>
      </div>

      {/* Formulario para Añadir Producto (CREATE) */}
      <div className="card mb-4">
        <div className="card-header">
          <h4>Añadir Nuevo Producto</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleAddProduct} className="row g-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Nombre del producto" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="col-md-2">
              <input type="number" className="form-control" placeholder="Precio" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="URL de la imagen" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">Añadir</button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de Productos (READ y DELETE) */}
      <h4>Productos Existentes</h4>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${new Intl.NumberFormat('es-CL').format(product.price)}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(product.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;