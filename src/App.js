//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AboutMe from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NoMatch from './pages/NoMatch';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<AboutMe />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
            <Route 
                path="*" 
                element={<NoMatch />} 
              />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;