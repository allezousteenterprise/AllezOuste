import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Voyages extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    destinations: {},
		    types: {},
		    prix: {},
		    voyages: {},
		    errors: {}
		}
		
		/*axios.get(`http://localhost:9000/api/destinations`).then(res => {

			let tableauxdestinations = {}
			let i;
			for(i=0; i<res.data.success.length; i++){
					tableauxdestinations.add(<option value="i">{res.data.success[i].voy_nom}</option>);
			}

			this.setState({
				destinations: tableauxdestinations
			})

			{this.state.destinations}		

	
		});*/
	}


	render(){
		return (

<div>
	<Navbar/>
	<div class="w3-container w3-margin-top w3-padding-48 w3-teal">
		<form>
			<div class="w3-row-padding w3-section w3-stretch">
			<select class="w3-select w3-white w3-third w3-padding" name="pays">
				<option value="" disabled selected>Destination</option>
			</select>


			<select class="w3-select w3-white w3-third w3-padding" name="sejour">
				<option value="" disabled selected>Type de Séjours</option>
				<option value="1">Séjour</option>
				<option value="2">Circuit</option>
				<option value="3">Croisière</option>
				<option value="4">Location</option>
				<option value="5">Club-Vacances</option>
			</select>

			<select class="w3-select w3-white w3-third w3-padding" name="prix">
				<option value="" disabled selected>Prix</option>
				<option value="1">- 300 euros</option>
				<option value="2">- 600 euros</option>
				<option value="3">- 1000 euros</option>
				<option value="3">- 2000 euros</option>
				<option value="3">- 5000 euros</option>
				<option value="3">+ 5000 euros</option>
			</select>

			</div>

			<div class="w3-display-container">
				<bouton class="w3-btn w3-white w3-middle">Rechercher</bouton>
			</div>
		</form>
	</div>
</div>


		);
	}
}
