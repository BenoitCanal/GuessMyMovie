import React from 'react'
import {Link} from "react-router-dom";

import logo from '../assets/img/logoWhite.png';

export const ThemeSelector = () => (
    <section className="ThemeSelector menuScreen">
      <header className="Header">
        <img src={logo} className="Header_logo" alt="logo" />
      </header>
      <h1>Choix du th&egrave;me</h1>
      <ul className="ThemeSelector_menu">
          <li className="ThemeSelector_menu-element ThemeSelector_menu-element--films"><Link to="/game/ta/movies">Films</Link></li>
          <li className="ThemeSelector_menu-element ThemeSelector_menu-element--series"><Link to="/series">Séries</Link></li>
          <li className="ThemeSelector_menu-element ThemeSelector_menu-element--jeunesse"><Link to="/jeunesse">Jeunesse</Link></li>
      </ul>
    </section>
);