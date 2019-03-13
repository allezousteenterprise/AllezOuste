import React, { Component } from 'react';
//import axios from 'axios';
import Navbar from './Navbar';
import photosaccueil from './photos/airplane.jpg';

export default class Home extends Component {

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
				<div class="w3-display-container w3-wide">
					<img class="w3-image" src={photosaccueil} alt="Agence de voyages"/>
					<div class="w3-display-middle w3-margin-top w3-center">
						<h1 class="w3-xxlarge w3-text-white">
							<span class="w3-padding w3-black w3-opacity-min"><b>A</b>llez<b>O</b>ust</span>
							<br></br>
							<span class="w3-hide-small w3-text-light-grey"> Voyagez dans le temps</span>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}
