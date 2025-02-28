import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Home from './pages/home';
import AllFixtures from './pages/all-fixtures';
import PLTable from './pages/plTable';
import NavBar from './components/nav-bar';
import Reels from './pages/reels';
import Profile from './pages/Profile';

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/all-fixtures" element={<AllFixtures />} />
          <Route path="/plTable" element={<PLTable />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
