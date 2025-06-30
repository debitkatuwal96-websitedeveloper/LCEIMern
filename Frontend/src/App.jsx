// src/App.js
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Admin from './pages/Admin'; 

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />          
        <Route path="/about" element={<About />} />   
          <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/admin" element={<Admin />} />  
      </Routes>
    </Router>
  );
}

export default App;
