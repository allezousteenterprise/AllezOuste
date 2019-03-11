import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Home extends Component {
	render(){
		return (
		<div>
			<Navbar/>
			<div>
				<h1>Bienvenue chez Allez Ouste!!</h1>
			</div>
		</div>
		);
	}
}
