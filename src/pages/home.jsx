import React, { useEffect } from 'react';
import './home.scss';
import PLTable from '../components/plTable.js';
import Fixtures from '../components/fixtures.js';
import Header from '../components/header.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import liverpoolLogo from '../assets/teams/Liverpool.png';  // Adjust path as needed
import manCityLogo from '../assets/teams/Man City.png';  // Adjust path as needed
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

    // Add carousel settings
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
        <div className="home">
            <Header />
            
            {/* Add carousel section */}
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className='item'>
                        <div className='liveCard'>
                            <h4>Premier League</h4>
                            <p>Week 10</p>
                            <div className='live-data'>
                                <div className='homeTeam'>
                                    <img src={liverpoolLogo} alt="Liverpool" />
                                    <h5>Liverpool</h5>
                                    <h6>Home</h6>
                                </div>
                                <div className='score'>
                                    <h2>1:1</h2>
                                    <p>81'</p>
                                </div>
                                <div className='awayTeam'>
                                    <img src={manCityLogo} alt="Man City" />
                                    <h5>Man City</h5>
                                    <h6>Away</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='liveCard'>
                            <h4>Premier League</h4>
                            <p>Week 10</p>
                            <div className='live-data'>
                                <div className='homeTeam'>
                                    <img src={liverpoolLogo} alt="Liverpool" />
                                    <h5>Liverpool</h5>
                                    <h6>Home</h6>
                                </div>
                                <div className='score'>
                                    <h2>1:1</h2>
                                    <p>81'</p>
                                </div>
                                <div className='awayTeam'>
                                    <img src={manCityLogo} alt="Man City" />
                                    <h5>Man City</h5>
                                    <h6>Away</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='liveCard'>
                            <h4>Premier League</h4>
                            <p>Week 10</p>
                            <div className='live-data'>
                                <div className='homeTeam'>
                                    <img src={liverpoolLogo} alt="Liverpool" />
                                    <h5>Liverpool</h5>
                                    <h6>Home</h6>
                                </div>
                                <div className='score'>
                                    <h2>1:1</h2>
                                    <p>81'</p>
                                </div>
                                <div className='awayTeam'>
                                    <img src={manCityLogo} alt="Man City" />
                                    <h5>Man City</h5>
                                    <h6>Away</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='container'>
                <PLTable showTopSix={true} title="Premier League" showViewAll={true}  />
                <Fixtures limit={5} />
            </div>
        </div>
    );
};
  
export default Home;