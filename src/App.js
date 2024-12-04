import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/LandingSection.js';
import Projects from './components/ProjectsSection.js';
import ContactMeSection from './components/ContactMeSection';
import { AlertProvider } from './contexts/alertContext'; // Ensure the correct import path

const App = () => {
  return (
    <BrowserRouter>
      <AlertProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMeSection />} />
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
};

export default App;
