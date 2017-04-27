import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export const Ranking = () => {

    const data = [{
        nomComplet: 'Tanner Linsley',
        score: 100,
    }]

// Create some column definitions
    const columns = [{
        header: 'Joueur',
        accessor: 'nomComplet'
    }, {
        header: 'Score',
        accessor: 'score'
    }]

// Display your table!
    return (
        <ReactTable
            className='-striped -highlight'
            data={data}
            columns={columns}
            defaultPageSize={10}
        />
    )
}