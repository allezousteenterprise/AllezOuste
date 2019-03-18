import React, { Component } from 'react';
//import axios from 'axios';
import Navbar from './NavbarConnecter';

export default class Profil extends Component {

	constructor(props) {
		super(props);
		this.state = {
			history:this.props.history,		
		}
	}

	render(){
		return (
			<div>
				<Navbar history={this.state.history} />
				<div className="w3-teal">
					<p>Bonjour</p>
					<h1>Hello, toi !!!</h1>
				</div>
			</div>
		);
	}
}
