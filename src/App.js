import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from './components/Home';
import Voyages from './components/Voyages';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import 'w3-css/w3.css';

class App extends Component {
    render() {
        return (
		<Router>
		<div>
			<Route exact path="/" component={ Home } />
			<Route path="/voyages" component={ Voyages } />
			<Route path="/connexion" component={ Connexion } />
			<Route path="/inscription" component={ Inscription } />
		</div>
		</Router>
        );
    };
}

export default App;
