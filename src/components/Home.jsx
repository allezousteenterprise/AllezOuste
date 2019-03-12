import React, { Component } from 'react';
//import axios from 'axios';
import Navbar from './Navbar';

export default class Home extends Component {
	render(){
		return (
			<div>
				<Navbar/>
				<header class="w3-display-container w3-content w3-wide" style={{maxwidth:'1500px'}}>
					<img class="w3-image" src={"//home/ubo/eclipse-workspace/AllezOuste/src/photos/airplane.jpg"} alt="Agence de voyages HopHopHopGO" style={{width:'1500px',height:'800px'}} />
					<div class="w3-display-middle w3-margin-top w3-center">
						<h1 class="w3-xxlarge w3-text-white">
							<span class="w3-padding w3-black w3-opacity-min"><b>H</b>op<b>H</b>op<b>H</b>op<b>Go</b></span>
							<span class="w3-hide-small w3-text-light-grey"> Voyagez dans le temps</span>
						</h1>
					</div>
				</header>

			</div>
		);
	}
}
