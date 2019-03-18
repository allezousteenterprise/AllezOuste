import React, { Component } from 'react';
import axios from 'axios';
import NavbarConnecter from './NavbarConnecter';

export default class VoyagesConnecter extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    destinations: {},
		    types: {},
		    prix: {},
		    voyages: {},
		    errors: {},
            	    history:this.props.history,
		}

		axios.get('/TestServlet/destinations').then(res => {
			let tableauxdestinations = {}
			let i;
			for(i=0; i<res.data.length; i++){
				tableauxdestinations.add(
					<option value="i">{res.data.success[i].voy_nom}</option>
				);
			}

			this.setState({
				destinations: tableauxdestinations
			})
		});

		axios.get('/TestServlet/typesvoyages').then(res => {
			let tableauxtypes = {}
			let i;
			for(i=0; i<res.data.length; i++){
				tableauxtypes.add(
					<option value="i">{res.data.success[i].voy_types}</option>
				);
			}

			this.setState({
				types: tableauxtypes
			})
		});
	}


	render(){
		return (

<div>
	<NavbarConnecter history={this.state.history}/>
	<div className="w3-container w3-margin-top w3-padding-48 w3-teal">
		<form onSubmit={ this.handleSubmit } >
			<div className="w3-row-padding w3-section w3-stretch">
			<select className="w3-select w3-white w3-third w3-padding" name="pays">
				<option value="" disabled selected>Destination</option>
				{this.state.destinations}
			</select>


			<select className="w3-select w3-white w3-third w3-padding" name="sejour">
				{this.state.types}
			</select>

			<select className="w3-select w3-white w3-third w3-padding" name="prix">
				<option value="" disabled selected>Prix</option>
				<option value="1">- 300 euros</option>
				<option value="2">- 600 euros</option>
				<option value="3">- 1000 euros</option>
				<option value="3">- 2000 euros</option>
				<option value="3">- 5000 euros</option>
				<option value="3">+ 5000 euros</option>
			</select>

			</div>

			<div className="w3-display-container">
				<bouton type="submit" className="w3-btn w3-white w3-middle">Rechercher</bouton>
			</div>
		</form>
	</div>
</div>


		);
	}
}
