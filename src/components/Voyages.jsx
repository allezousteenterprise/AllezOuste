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
	<div className="w3-display-container w3-margin-top w3-padding-48">
		<h1>Les voyages disponibles chez AllezOuste :</h1>
	</div>
</div>
		);
	}
}
