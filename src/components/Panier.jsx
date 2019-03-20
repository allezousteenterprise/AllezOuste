import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './NavbarConnecter';

export default class Panier extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    reservations: {},
            	    history:this.props.history
		}
		
		const user = {
		    identifiant: sessionStorage.getItem('identifiant');
		}
		console.log(user);

		axios.post('/TestServlet/panier', {user}).then(res => {
			console.log("1 :"+res);
			var resultatreservation = JSON.parse(res.data);
			console.log("2 :"+resultatreservation);
		});
	}

	render(){
		return (
			<div>
    				<Navbar history={this.state.history}/>
				<div className="w3-display-middle w3-margin-top w3-center w3-card-4">
					<div className="w3-container w3-teal">
						<h2>Panier</h2>
					</div>
				</div>
			</div>
		);
	}
}
