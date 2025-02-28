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
          <Route path="/sportsapp/" element={<Home />} />
          <Route path="/sportsapp/all-fixtures" element={<AllFixtures />} />
          <Route path="/sportsapp/plTable" element={<PLTable />} />
          <Route path="/sportsapp/reels" element={<Reels />} />
          <Route path="/sportsapp/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </div>
  );
}

function App() {
  return (
    <Router basename="/sportsapp">
      <AppContent />
    </Router>
  );
}

export default App;
