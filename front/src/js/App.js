import React, { Component } from 'react';
import logo from '../assets/img/logoBlack.png';
import '../css/App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Home} from "./Home";
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
                    <div className="App-wrapper">
                        <Route exact path="/" component={Home}/>
                        {/*<Route path="/game" component={Game}/>*/}
                        <Route exact path="/game/ta" component={ThemeSelector}/>
                        <Route exact path="/game" component={GameModeSelector}/>
                        <Route exact path="/endOfGame" component={EndOfGame}/>
                        <Route exact path="/ranking" component={Ranking}/>
                        <Route exact path="/exit" component={Exit}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
