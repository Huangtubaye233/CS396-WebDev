import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MemesPage from './components/memes';
import MusicPage from './components/music';
import PlaygroundPage from './components/playground';
import './styles.css';

const App = () => {


  return (
    <Router basename="/CS396-WebDev">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memes" element={<MemesPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
    </Router>
  );
};

export default App;
