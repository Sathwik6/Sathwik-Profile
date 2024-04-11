import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
