import React, { useEffect } from 'react';
import './home.scss';
import PLTable from '../components/plTable.js';
import Fixtures from '../components/fixtures.js';
import Header from '../components/header.js';

const Home = () => {
    useEffect(() => {
        // Add active class to the navigation item when component mounts
        const navItem = document.querySelector('[href="/"]');
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
        <div className="home">
            <Header />
            
            <div className='container'>
                <PLTable showTopSix={true} title="Premier League" showViewAll={true}  />
                <Fixtures title="Coming Up" showNextWeekOnly={true}/>
            </div>
        </div>
    );
};
  
export default Home;