import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importe Navigate aqui
import TelaInicial from "./Pages/TelaInicial";
import CriacaoChar from "./Pages/CriacaoChar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/arcanum-chronicles/" element={<TelaInicial />} />
          <Route path="/criacao-char" element={<CriacaoChar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
