import React, { useEffect } from 'react';
   
import video1 from '../assets/media/video-1.mp4';
import video2 from '../assets/media/video-2.mp4';
import video3 from '../assets/media/video-3.mp4';
import './reels.scss';

export default function Reels() {

    useEffect(() => {
        // Add active class to the navigation item when component mounts
        const navItem = document.querySelector('[href="/reels"]');
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
        <div className='reels-wrapper'>
            <h2>Reels</h2>
            <div className='reel-container'>
            <video
                src={video1}
                width="100%"
                height="auto"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
            />

            <video
                src={video2}
                width="100%"
                height="auto"
                controls={false}        
                autoPlay
                muted
                loop
                playsInline
            />

            <video
                src={video3}
                width="100%"
                height="auto"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
            />
            </div>
            
        </div>
    );
}


