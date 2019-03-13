import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
	super(props);
	this.state = {
		history:this.props.history,		
	}
}
_onclikVoyage(){
	this.state.history.push({pathname:"/voyages"});
}
    render() {
        return(
            <nav className="w3-top">
		<div className="w3-bar w3-white w3-padding w3-wide w3-card">
		        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	
				<a href="/" className="w3-bar-item w3-button w3-padding-large"><b>A</b>llez<b>O</b>ust</a>

				<div class="w3-right w3-hide-small">
					<button onClick={this._onclikVoyage.bind(this)} className="w3-bar-item w3-button w3-padding-large">Voyages</button>
					<a href="/connexion" className="w3-bar-item w3-button w3-padding-large">Connexion</a>
					<a href="/inscription" className="w3-bar-item w3-button w3-padding-large">Inscription</a>
				</div>
		        </div>
		</div>
            </nav>
        )
    }
}
export default Navbar;
