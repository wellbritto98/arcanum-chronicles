import React, { useState, useEffect } from 'react';

import { BrowserRouter, Outlet, Routes, Navigate, Route } from 'react-router-dom';
import TelaInicial from './Pages/TelaInicial';
import CriacaoChar from './Pages/CriacaoChar';
import ProximaPagina from './Pages/ProximaPagina';
import { authService } from './Services/AuthService';




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
    return <div>Carregando...</div>; // Ou algum componente de carregamento
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
        </Route>
        <Route exact path="/" element={<TelaInicial />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;


{  /*import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  

  return (

   
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/arcanum-chronicles/" element={<TelaInicial />} />
          <Route path="/criacao-char" element={<CriacaoChar />} />
          <Route path="/qualquer" element={<ProximaPagina />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;*/}