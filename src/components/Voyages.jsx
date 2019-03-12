import React, { Component } from 'react';
//import axios from 'axios';
import Navbar from './Navbar';

export default class Voyages extends Component {
	render(){
		return (
			<div style={{marginTop:'46px'}}>
				<Navbar/>
				<div>
					<h1>Allez Ouste!!</h1>
					<h2>Voyage actuellement disponible chez AllezOuste :</h2>
				</div>
			</div>
		);
	}
}
