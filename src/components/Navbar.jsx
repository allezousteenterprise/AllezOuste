import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav class="w3-top">
		<div class="w3-bar w3-white w3-padding w3-wide w3-card">
		        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	
				<a href="/" class="w3-bar-item w3-button w3-padding-large"><b>A</b>llez<b>O</b>ust</a>

				<div class="w3-right w3-hide-small">
					<a href="/voyages" class="w3-bar-item w3-button w3-padding-large">Voyages</a>
					<a href="/connexion" class="w3-bar-item w3-button w3-padding-large">Connexion</a>
					<a href="/inscription" class="w3-bar-item w3-button w3-padding-large">Inscription</a>
				</div>
		        </div>
		</div>
            </nav>
        )
    }
}
export default Navbar;
