import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import Results from './components/Results';
import Clock from './components/Clock';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/clock">Saat</Link> | 
        <Link to="/stopwatch">Saniyəölçən</Link> | 
        <Link to="/timer">Taymer</Link> | 
        <Link to="/results">Nəticələr</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Navigate to="/clock" replace />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/results" element={<Results />} />
        {/* Əlavə: tapılmayan səhifə üçün */}
        <Route path="*" element={<div style={{ textAlign: 'center' }}>404 - Səhifə tapılmadı</div>} />
      </Routes>
    </div>
  );
}

export default App;
