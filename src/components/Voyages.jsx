import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Voyages extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    voyages: {},
            	    history:this.props.history
		}

		axios.post('/TestServlet/voyages').then(res => {
			console.log(res);
		});
	}

	render(){
		return (

<div>
	<Navbar history={this.state.history}/>
	<div className="w3-margin-top w3-padding-48">
		<h1 className="w3-padding-16 w3-center w3-teal">Voyages disponibles</h1>

		  <div className="w3-row-padding w3-grayscale">
			    <div className="w3-col l3 m6 w3-margin-bottom">
			      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lopez_scaling_seawall.jpg/479px-Lopez_scaling_seawall.jpg"} style={{width:"100%"}}  />
			      <h3>Début de la Guerre de corée (1950)</h3>
			      <p className="w3-opacity">1950: Guerre de Corée </p>
			      <p>1950 c'est le début de la guerre de Corée</p>
			      <p><button className="w3-button w3-light-grey w3-block">Voir plus d'informations</button></p>
			    </div>
		  </div>
	</div>
</div>
		);
	}
}
