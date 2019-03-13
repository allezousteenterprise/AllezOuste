import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {
    Router,
Switch,
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
		<Router history={createBrowserHistory()}>
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/voyages" component={ Voyages } />
				<Route path="/connexion" component={ Connexion } />
				<Route path="/inscription" component={ Inscription } />
				<Route component={ Home } />
			</Switch>
		</Router>
        );
    };
}

export default App;
