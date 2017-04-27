import React from 'react'
import {Link, Route} from "react-router-dom";
import {ThemeSelector} from "./ThemeSelector";

export const GameModeSelector = () => (
    <div>
        <h2><Link to="/game/ta">Time Attack</Link></h2>
        <h2><Link to="/game/duel">Duel</Link></h2>
        <h2><Link to="/game/infinity">Infinity</Link></h2>

    </div>
);