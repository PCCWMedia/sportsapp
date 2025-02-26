// components/Header/Header.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import logo from '../assets/nowtv-logo-w.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;