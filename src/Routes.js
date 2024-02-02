import React, { useState, useEffect } from 'react';

import { BrowserRouter, Outlet, Routes, Navigate, Route } from 'react-router-dom';
import TelaInicial from './Pages/TelaInicial';
import CriacaoChar from './Pages/CriacaoChar';
import ProximaPagina from './Pages/ProximaPagina';
import { authService } from './Services/AuthService';
import CharacterPage from './Pages/CharacterPage';




const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const isValid = await authService.isTokenValid();
      setIsAuthenticated(isValid);
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>; //mexer depois !!!!!!!!!!!!!!!!!!!!!!!!
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/criacao-char" element={<CriacaoChar />} />
          <Route path="/qualquer" element={<ProximaPagina />} />
          <Route path="/Character/:id" element={<CharacterPage />} />
        </Route>
        <Route exact path="/" element={<TelaInicial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;

