import React, { Component } from 'react';
import logo from '../assets/img/logoBlack.png';
import '../css/App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Game} from "./Game";
import {Ranking, Score} from "./Ranking";
import {Exit} from "./Exit";
import {ThemeSelector} from "./ThemeSelector";
import {GameModeSelector} from "./GameModeSelector";
import {EndOfGame} from "./EndOfGame";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>Guess the movie</h1>
                        <h2><Link to="/game">JOUER</Link></h2>
                        <h2><Link to="/ranking">Classement</Link></h2>
                        <h2><Link to="/exit">EXIT</Link></h2>
                    </div>
                    <div className="App-intro">
                        {/*<Route path="/game" component={Game}/>*/}
                        <Route exact path="/game/ta" component={ThemeSelector}/>
                        <Route exact path="/game" component={GameModeSelector}/>
                        <Route exact path="/endOfGame" component={EndOfGame}/>
                        <Route exact path="/ranking" component={Ranking}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
