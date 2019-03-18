import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Voyages extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    destinations: {},
		    voyages: {},
		    errors: {},
            	    history:this.props.history,
		}

		/*axios.get('/TestServlet/destinations').then(res => {
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
		});*/

		//this.handleInputChange = this.handleInputChange.bind(this);
        	//this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
		    [e.target.name]: e.target.value
		})
	}

	render(){
		return (

<div>
	<Navbar history={this.state.history}/>
	<div className="w3-display-container w3-margin-top w3-padding-48 w3-teal">
		<form onSubmit={ this.handleSubmit } >
			<div className="w3-row-padding w3-section w3-stretch">
			<select className="w3-select w3-white w3-third w3-padding" name="pays">
				<option value="" disabled selected>Destination</option>
				{this.state.destinations}
			</select>

			</div>

			<div className="w3-top-right">
				<bouton type="submit" className="w3-btn w3-white w3-middle">Rechercher</bouton>
			</div>   
		</form>
	</div>
</div>


		);
	}
}
