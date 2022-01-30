import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;