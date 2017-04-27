import React from 'react'
import {Link} from "react-router-dom";

export const GameModeSelector = () => (
    <div>
        <h2><Link to="/game/ta">Time Attack</Link></h2>
        <h2><Link to="/game/duel">Duel</Link></h2>
        <h2><Link to="/game/infinity">Infinity</Link></h2>
    </div>
);