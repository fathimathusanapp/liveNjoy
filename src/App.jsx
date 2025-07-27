// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'; // 👈 Import Contact page

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* 👈 Contact Route */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
