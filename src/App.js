import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './/Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Checkout from './Pages/Checkout/Checkout'

import './App.css';

function App() {
  return (
      <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
        </Route>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
