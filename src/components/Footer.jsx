import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <footer className="py-5 bg-dark"> 
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; BlackMoon 2025</p>
        <div className="m-0 text-center mt-2">
          <Link to="/admin" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '0.9rem' }}>
            Panel de Administración
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;