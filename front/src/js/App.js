import React, { Component } from 'react';
import '../css/App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Home} from "./Home";
import {Game} from "./Game";
import {Score} from "./Score";
import {Exit} from "./Exit";
import {ThemeSelector} from "./ThemeSelector";
import {GameModeSelector} from "./GameModeSelector";

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
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
