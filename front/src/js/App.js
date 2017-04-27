import React, { Component } from 'react';
import logo from '../assets/img/LOGO GTM NOIR SANS FOND.png';
import '../css/App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Game} from "./Game";
import {Score} from "./Score";
import {Exit} from "./Exit";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>Guess the movie</h1>
                        <h2><Link to="/game">JOUER</Link></h2>
                        <h2><Link to="/score">SCORE</Link></h2>
                        <h2><Link to="/exit">EXIT</Link></h2>
                    </div>
                    <div className="App-intro">
                        <Route exact path="/game" component={Game}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
