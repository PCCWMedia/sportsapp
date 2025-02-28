import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Home from './pages/home';
import AllFixtures from './pages/all-fixtures';
import PLTable from './pages/plTable';
import NavBar from './components/nav-bar';
import Reels from './pages/reels';
import Profile from './pages/Profile';  
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
       
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/all-fixtures" element={
            <AllFixtures />
          } />
          <Route path="/plTable" element={
            <PLTable />
          } />
          <Route path="/reels" element={
            <Reels />
          } />
          <Route path="/profile" element={
            <Profile />
          } />
          {/* Add more routes here as you create more pages */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
