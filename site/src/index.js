import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from './pages/home';
import Acai from './pages/acai';
import Grama from './pages/graminha';
import Signo from './pages/signo';
import Febre from './pages/Febre';
import Salario from './pages/salario';
import Paradas from './pages/paradas';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/acai' element={<Acai/>}/>
      <Route path='/grama' element={<Grama/>}/>
      <Route path='/signo' element={<Signo/>}/>
      <Route path='/febre' element={<Febre />} />
      <Route path='/salario' element={<Salario />} />
      <Route path='/paradas' element={<Paradas />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

