import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../pages/home';
import About from '../pages/about';
import Products from '../pages/Products';
import Contact from '../pages/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* About page */}
            <Route path="/about" element={<About />} />

            {/* Products page */}
            <Route path="/products" element={<Products />} />

            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;