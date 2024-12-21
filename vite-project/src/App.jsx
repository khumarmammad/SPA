import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Clock />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  </Router>
);

export default App;