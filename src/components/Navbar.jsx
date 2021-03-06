import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history:this.props.history,		
        }
    }

    _onclickHome(){
        this.state.history.push({pathname:"/TestServlet/"});
    }
    
    _onclickVoyage(){
        this.state.history.push({pathname:"/TestServlet/voyages"});
    }
    
    _onclickConnexion(){
        this.state.history.push({pathname:"/TestServlet/connexion"});
    }
    
    _onclickInscription(){
        this.state.history.push({pathname:"/TestServlet/inscription"});
    }
    
    render() {
        return(
            <nav className="w3-top">
		<div className="w3-bar w3-white w3-padding w3-wide w3-card">
		        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	
                <button onClick={this._onclickHome.bind(this)} className="w3-bar-item w3-button w3-padding-large"><b>A</b>llez<b>O</b>uste</button>

				<div className="w3-right w3-hide-small">
					<button onClick={this._onclickVoyage.bind(this)} className="w3-bar-item w3-button w3-padding-large">Voyages</button>
                    <button onClick={this._onclickConnexion.bind(this)} className="w3-bar-item w3-button w3-padding-large">Connexion</button>
                    <button onClick={this._onclickInscription.bind(this)} className="w3-bar-item w3-button w3-padding-large">Inscription</button>
				</div>
		        </div>
		</div>
            </nav>
        )
    }
}
export default Navbar;
