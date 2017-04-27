import React from 'react'

import logo from '../assets/img/logoWhite.png';

export let rankings = [
    ["Franck Cadoret", 100],
    ["Metin Osman", 18],
    ["Sebastien Talasi", 0],
    ["Frederic Guay", -1],
];

function compare(a, b) {
    if (a[1] < b[1])
    return 1;
    if (a[1] > b[1])
    return -1;
    return 0;
}

export const Ranking = () => {
    let trr = rankings.sort(compare).map(rank => (
        <tr key={rank[0]}>
            <th className="Ranking_joueur">{rank[0]}</th>
            <th>{rank[1]}</th>
        </tr>
    ));

    return(
        <section className="Ranking menuScreen">
            <header className="Header">
                <img src={logo} className="Header_logo" alt="logo" />
            </header>
            <h1>Meilleurs scores</h1>
            <table className="Ranking_table">
                <tr>
                    <th className="Ranking_joueur">Joueur</th>
                    <th>Score</th>
                </tr>
                {trr}
            </table>
        </section>
    );
}
