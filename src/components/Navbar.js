import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" ><h2>Gestion des cours et des exercices</h2></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
			<li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
			<li className="nav-item">
                            <Link className="nav-link" to="/voyages">Voyages</Link>
                        </li>
			<li className="nav-item">
                            <Link className="nav-link" to="/login">Connexion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Inscription</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;
