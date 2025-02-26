import React from 'react';
import './plTable.scss';
import plTableData from './plTable.json';

export default function PLTable({ showTopSix, title, showViewAll }) {
    const tableData = showTopSix 
        ? plTableData.plTable.slice(0, 6) 
        : plTableData.plTable;

    return (
            
        <div className="pl-table-container">
            
            <div className="title-header">
                <img src={require(`../assets/pl-logo-w.svg`).default} alt="Premier League" />
                {showViewAll && (
                    <div className="title-header-right">
                        <a href="/plTable">View All</a>
                    </div>
                )}
            </div>

            <div className="table-wrapper">
                <table className="pl-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team</th>
                            <th>PL</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((team) => (
                            <tr key={team.standing}>
                                <td>{team.standing}</td>
                                <td><span><img src={require(`../assets/teams/${team.club}.png`)} alt={team.club} /> {team.shortName}</span> </td>
                                <td>{team.PL}</td>
                                <td>{team.W}</td>
                                <td>{team.D}</td>
                                <td>{team.L}</td>
                                <td>{team.pts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}