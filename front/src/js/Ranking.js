import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export const Ranking = () =>
    <table className="Ranking_table">
        <tr>
            <th className="Ranking_joueur">Joueur</th>
            <th>Score</th>
        </tr>
        <tr>
            <td className="Ranking_joueur">Alfreds Futterkiste</td>
            <td>100</td>
        </tr>
        <tr>
            <td className="Ranking_joueur">Centro Moctezuma</td>
            <td>82</td>
        </tr>
        <tr>
            <td className="Ranking_joueur">Ernst Handel</td>
            <td>72</td>
        </tr>
        <tr>
            <td className="Ranking_joueur">Island Trading</td>
            <td>58</td>
        </tr>
        <tr>
            <td className="Ranking_joueur">Bacchus Winecellars</td>
            <td>37</td>
        </tr>
        <tr>
            <td className="Ranking_joueur">Magazzini Riuniti</td>
            <td>34</td>
        </tr>
    </table>