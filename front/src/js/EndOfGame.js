import React from 'react'
import {Link, Route} from "react-router-dom";

export const EndOfGame = () => (
    <div>
        <h2>Score : XX</h2>
        <h2><Link to="/listFilm">Liste des films</Link></h2>
        <h2><Link to="/ranking">Classement</Link></h2>
        <h2><Link to="/">Retour</Link></h2>
    </div>
);