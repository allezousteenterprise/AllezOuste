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
import Profil from './components/Profil';
import VoyagesConnecter from './components/VoyagesConnecter';
import 'w3-css/w3.css';

class App extends Component {
    render() {
        return (
		<Router history={createBrowserHistory()}>
			<Switch>
				<Route exact path="/TestServlet/" component={ Home } />
				<Route path="/TestServlet/voyages" component={ Voyages } />
				<Route path="/TestServlet/connexion" component={ Connexion } />
				<Route path="/TestServlet/inscription" component={ Inscription } />
				<Route path="/TestServlet/profil" component={Profil} />
				<Route path="/TestServlet/voyagesconnecter" component={VoyagesConnecter} />
				<Route component={ Home } />
			</Switch>
		</Router>
        );
    };
}

export default App;
