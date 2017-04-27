import React from 'react'
import {Link} from "react-router-dom";

export const ThemeSelector = () => (
    <div>
        <h2><Link to="/game/ta/movies">Films</Link></h2>
        <h2><Link to="/series">Séries</Link></h2>
        <h2><Link to="/jeunesse">Jeunesse</Link></h2>
    </div>
);