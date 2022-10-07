import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';









import Home from './pages/home';
import Acai from './pages/acai';
import Grama from './pages/graminha';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/acai' element={<Acai/>}/>
      <Route path='/grama' element={<Grama/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

