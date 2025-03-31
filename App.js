import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import courses from './data/courses';
import testimonials from './data/testimonials';
import './App.css';
import Homepage from './Homepage.js';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<div>Courses Page Placeholder</div>} />
      <Route path="/login" element={<div>Login Page Placeholder</div>} />
    </Routes>
  </Router>
  );
}

export default App;