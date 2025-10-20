import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Importaciones de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css'; // Asegúrate que este archivo exista

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)