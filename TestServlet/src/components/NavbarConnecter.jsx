import React, { Component } from 'react';

class NavbarConnecter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history:this.props.history,		
        }
    }

    _onclickHome(){
        this.state.history.push({pathname:"/TestServlet/"});
    }
    
    _onclickVoyageCo(){
        this.state.history.push({pathname:"/TestServlet/voyagesconnecter"});
    }

    _onclickProfil(){
        this.state.history.push({pathname:"/TestServlet/profil"});
    }
    
    render() {
        return(

<nav className="w3-top">
  <div className="w3-bar w3-white w3-padding w3-wide w3-card">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    <button onClick={this._onclickVoyageCo.bind(this)} className="w3-bar-item w3-button w3-padding-large"><b>A</b>llez<b>O</b>uste</button>

<div className="w3-right w3-hide-small">
    <button onClick={this._onclickProfil.bind(this)} className="w3-bar-item w3-button w3-padding-large">Panier</button>
    <button onClick={this._onclickProfil.bind(this)} className="w3-bar-item w3-button w3-padding-large">Historique</button>
    <button onClick={this._onclickProfil.bind(this)} className="w3-bar-item w3-button w3-padding-large">Profil</button>
    <button onClick={this._onclickHome.bind(this)} className="w3-bar-item w3-button w3-padding-large">Deconnexion</button>
</div>

        </div>
</div>
</nav>
        )
    }
}
export default NavbarConnecter;
