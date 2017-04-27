import React from 'react';
import {
    Link
} from 'react-router-dom';

import logo from '../assets/img/logoWhite.png';

export const Home = () => (
    <section className="Home menuScreen">
        <img src={logo} className="Home_logo" alt="logo" />
        <ul className="Home_menu">
        	<li className="Home_menu-element"><Link to="/game">JOUER</Link></li>
	        <li className="Home_menu-element"><Link to="/ranking">CLASSEMENT</Link></li>
	        <li className="Home_menu-element"><Link to="/exit">A PROPOS</Link></li>
        </ul>
    </section>
);
