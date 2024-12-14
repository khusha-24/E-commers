import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Snacks from './components/Snacks';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} /> {/* Add this route */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/snacks" element={<Snacks />} />
      </Routes>
    </Router>
  );
};

export default App;
