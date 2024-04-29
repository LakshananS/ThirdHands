import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Switch from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Healthcare from './components/Healthcare'
import Contact from './components/Contact'
import About from './components/About'
import Healthsupport from './components/Healthsupport'
import Peoplesupport from './components/Peoplesupport'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/Healthsupport" element={<Healthsupport/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Peoplesupport" element={<Peoplesupport />} />
        </Routes>
      </Router>
    </>
  );
}
