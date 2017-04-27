import React from 'react'
import {Link, Route} from "react-router-dom";
import {rankings} from "./Ranking";

export const EndOfGame = (props) => {
    rankings.push(["Demo", props.score]);
    var rows = [];
    props.history.map(function(answer) {
        rows.push(
        <div key={answer}>
        <img src={answer[0]} style={{width: "10vw"}}/>
        <h5 className="title">{answer[1]}</h5>
        </div>
        );
    }.bind(this))

    return (
        <div>
            <h2>{`Score: ${props.score}`}</h2>
            <h2>Liste des films</h2>
            {rows}
            <h2><Link to="/ranking">Classement</Link></h2>
            <h2><Link to="/">Retour</Link></h2>
        </div>
    );
};