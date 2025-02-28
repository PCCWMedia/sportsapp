import React from 'react';
import PLTable from '../components/plTable.js';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function AllFixtures() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <button onClick={() => navigate('/', { state: { isBack: true } })} className='back-page-button'> <FontAwesomeIcon icon={faChevronLeft} /> Back</button>
            <PLTable title="Premier League" showViewAll={false} />
        </div>
    );
}


