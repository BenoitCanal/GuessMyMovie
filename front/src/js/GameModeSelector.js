import React from 'react'
import {Link, Route} from "react-router-dom";
import {ThemeSelector} from "./ThemeSelector";

import logo from '../assets/img/logoWhite.png';

export const GameModeSelector = () => (
	<section className="GameModeSelector menuScreen">
		<header className="Header">
			<img src={logo} className="Header_logo" alt="logo" />
		</header>
		<h1>Choix du mode</h1>
		<ul className="GameModeSelector_menu">
	        <li className="GameModeSelector_menu-element GameModeSelector_menu-element--ta"><Link to="/game/ta">Time Attack</Link></li>
	        <li className="GameModeSelector_menu-element GameModeSelector_menu-element--duel"><Link to="/game/duel">Duel</Link></li>
	        <li className="GameModeSelector_menu-element GameModeSelector_menu-element--infinity"><Link to="/game/infinity">Infinity</Link></li>
        </ul>
    </section>
);