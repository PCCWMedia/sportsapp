// components/Header/Header.jsx
import { useState } from 'react';
import './nav-bar.scss';


const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <ul>
            <li>
                <a href='/' className='home'>Home</a>
            </li>
            <li>
                <a href='/reels' className='reels'>Reels</a>
            </li>
            <li>
                <a href='/all-fixtures' className='fixtures'>Fixtures</a>
            </li>
            <li>
                <a href='/profile' className='profile'>Profile</a>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar;