import React, { useEffect } from 'react';
import './profile.scss';
import setting from '../assets/icon/setting.svg';
import help from '../assets/icon/help.svg';
import profileImg from '../assets/Now-TV-app.svg';


export default function Profile() {
    useEffect(() => {
        // Add active class to the navigation item when component mounts
        const navItem = document.querySelector('[href="/profile"]');
        if (navItem) {
            navItem.classList.add('active');
        }

        // Cleanup function to remove active class when component unmounts
        return () => {
            if (navItem) {
                navItem.classList.remove('active');
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <div className="profile-avatar">
                    <img src={profileImg} alt="" />
                </div>
                <div className="profile-info">
                    <h2>Now TV</h2>
                    <p>nowtv@pccw.com</p>
                </div>
            </div>

            <div className="profile-menu">
                <div className="menu-item">
                    <div className="icon"> <img src={setting} alt="" /> </div>
                    <div className="menu-text">Settings</div>
                    <div className="arrow">›</div>
                </div>
                
                <div className="menu-item">
                    <div className="icon"> <img src={help} alt="" /> </div>
                    <div className="menu-text">Help</div>
                    <div className="arrow">›</div>
                </div>
                
            </div>
        </div>
    );
}