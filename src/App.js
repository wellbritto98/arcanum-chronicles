import React from 'react';
import TelaInicial from "./Pages/TelaInicial";
import CriacaoChar from "./Pages/CriacaoChar";
import ProximaPagina from './Pages/ProximaPagina';
import $ from 'jquery';
import 'bootstrap';


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import Rotas from './Routes';
import GlobalSpinner from './Components/SpinnerGlobal';


const App = () => (
  <>
      <Rotas />
      <ToastContainer />
      <GlobalSpinner/>
  </>
);

export default App;