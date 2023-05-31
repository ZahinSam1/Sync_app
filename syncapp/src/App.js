import React from 'react';
import Frontpage from './components/Frontpage/frontpage';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
 
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Frontpage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;