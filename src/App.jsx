import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import './App.css';
import Home from './Home';
import SignUp from './signUp';
import Login from './login';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

