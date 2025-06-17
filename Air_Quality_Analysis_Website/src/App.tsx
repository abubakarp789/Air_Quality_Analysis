import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dataset from './pages/Dataset';
import ResearchQuestions from './pages/ResearchQuestions';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Conclusions from './pages/Conclusions';
import References from './pages/References';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 text-gray-800 font-sans">
      <Navbar />
      <main className="flex-1 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/research" element={<ResearchQuestions />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/results" element={<Results />} />
          <Route path="/conclusions" element={<Conclusions />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 