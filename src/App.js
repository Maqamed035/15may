import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import Results from './components/Results';
import Clock from './components/Clock';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/clock">Saat</Link> | 
          <Link to="/stopwatch">Saniyəölçən</Link> | 
          <Link to="/timer">Taymer</Link> 
          
        </nav>
        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;