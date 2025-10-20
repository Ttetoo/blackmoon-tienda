import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Credenciales incorrectas. Intenta con admin / admin');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center">Iniciar Sesión (Admin)</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* AÑADIMOS htmlFor y id */}
          <label htmlFor="username" className="form-label">Usuario</label>
          <input 
            type="text" 
            id="username"
            className="form-control" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {/* AÑADIMOS htmlFor y id */}
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            id="password"
            className="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;