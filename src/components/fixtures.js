import React from 'react';
import './fixtures.scss';
import fixtures from './fixtures.json';

export default function Fixtures({ title = "All Fixtures", showNextWeekOnly = false, showViewAll = true, limit }) {
    return (
        <div className="matches-wrapper">
                <div className="title-header">
                    <h2>{title}</h2>
                    {showViewAll && (
                        <div className="title-header-right">
                            <a href="/all-fixtures">View All</a>
                        </div>
                    )}
                </div>
                {fixtures
                    .filter(fixture => {
                        const fixtureDate = new Date(fixture.DateUtc);
                        const today = new Date();
                        if (showNextWeekOnly) {
                            const nextWeek = new Date();
                            nextWeek.setDate(today.getDate() + 7);
                            return fixtureDate > today && fixtureDate <= nextWeek;
                        }
                        return fixtureDate > today;
                    })
                    .slice(0, limit)
                    .map((fixture) => {
                        const date = new Date(fixture.DateUtc);
                        return (
                            <div className="match" key={fixture.MatchNumber}>
                                <div className='homeTeam'>{fixture.HomeTeam} <img src={require(`../assets/teams/${fixture.HomeTeam}.png`)} alt={fixture.HomeTeam} /></div>
                                <div className='matchTime'>
                                    <span>{date.toLocaleTimeString('en-HK', {hour: '2-digit', minute:'2-digit', hour12: false, timeZone: 'Asia/Hong_Kong'})}</span>
                                    {date.toLocaleDateString('en-HK', {day: '2-digit', month: 'short', timeZone: 'Asia/Hong_Kong'})}
                                </div>
                                <div className='awayTeam'><img src={require(`../assets/teams/${fixture.AwayTeam}.png`)} alt={fixture.AwayTeam} /> {fixture.AwayTeam}</div>
                            </div>
                        );
                    })}
            </div>
    );
}