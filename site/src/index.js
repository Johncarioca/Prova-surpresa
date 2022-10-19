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
import Ingresso from './pages/ingresso';
import Orcamento from './pages/orcamento';
import Contar from './pages/repetição/funcaoContar1';
import Contar2 from './pages/repetição/funcaoContar2';
import Contar3 from './pages/repetição/funcaoContar3';
import QueroCafe from './pages/cafe';


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
      <Route path='/ingresso' element={<Ingresso />} />
      <Route path='/orcamento' element={<Orcamento />} />
      <Route path='/conta' element={<Contar />} />
      <Route path='/conta2' element={<Contar2 />} />
      <Route path='/conta3' element={<Contar3 />} />
      <Route path='/feca' element={<QueroCafe />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

