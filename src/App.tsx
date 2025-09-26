import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio';
import PortfolioDetails from './components/pages/PortfolioDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="main-content">
        <Routes>
           <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
