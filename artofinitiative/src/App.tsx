import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DMScreen from './pages/DMScreen';
import Beastiary from './pages/Beastiary';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      
      <Router>
        <Navigation />
        <Banner />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dmscreen" element={<DMScreen />} /> {/* Make sure to import DMScreen component at the top */}
          <Route path="/beastiary" element={<Beastiary />} /> {/* Make sure to import Beastiary component at the top */}
        </Routes>
      </Router>
    </main>
    
  );
}

export default App;
