import React, { useEffect } from 'react';
import Fixtures from '../components/fixtures';

export default function AllFixtures() {
    useEffect(() => {
        // Add active class to the navigation item when component mounts
        const navItem = document.querySelector('[href="/all-fixtures"]');
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
        <div className='container'>
            <Fixtures title="All Fixtures" showViewAll={false} />
        </div>
    );
}

