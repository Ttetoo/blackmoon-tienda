import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Simulación de login. En un proyecto real, esto sería una llamada a una API.
    if (username === 'admin' && password === 'admin') {
      const userData = { username: 'admin', role: 'administrator' };
      setUser(userData);
      navigate('/admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};