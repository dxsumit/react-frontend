import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './components/Signin';
import Verification from './components/Verification';
import Success from './components/Success';


const App = () => {
  
  return (

      <BrowserRouter>
      
        {/* routes used in app..  */}
        <Routes>

          <Route exact path='/' element={ <Signin /> } />
          <Route path='/auth' element={ <Verification/> } />
          <Route path='/success' element={ <Success /> } />

        </Routes>
      
      </BrowserRouter>

  );
}

export default App;

