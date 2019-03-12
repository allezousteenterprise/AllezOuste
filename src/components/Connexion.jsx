import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Connexion extends Component {

	constructor() {
		super();
		this.state = {
			identifiant: '',
			password: '',
			errors: {}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
		
	handleSubmit(e) {
		e.preventDefault();
		const user = {
			identifiant: this.state.identifiant,
			password: this.state.password
		}		
		console.log(user);
		axios.post('http://localhost:9000/api/login', {user}).then(
		res => {
			console.log(res);
			if(res.data.code === 400){
				alert(res.data.failed);
			}else{
				if(res.data.code===200)
					document.location.href="/profil";
				else
			    		alert(res.data.success);
			}
		})
	}

	render(){
		return (
<div>
    <Navbar/>
    <div class="w3-display-middle w3-margin-top w3-center w3-card-4">

	<div class="w3-container w3-teal">
		<h2>Connexion</h2>
	</div>
      
	<form class="w3-container w3-padding-24" onSubmit={ this.handleSubmit }>
		<div>
			<p></p>
		    <div>
		      <input
			 type="text"
			 placeholder="Identifiant"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="identifiant"
			 required
			 onChange={ this.handleInputChange }
			 value={ this.state.identifiant }	
			 />
		    </div>
			<p></p>
		    <div>
		      <input
			type="password"
			placeholder="Mot de passe"
			class="w3-input w3-border w3-round w3-light-grey"
			name="password"
			required
			onChange={ this.handleInputChange }
			value={ this.state.password }
			/>
		    </div>
			<p></p>
		    <div>
	 	      <button type="submit" class="w3-button w3-round-xxlarge w3-medium w3-border w3-padding-large w3-ripple">
				Connectez-vous !
		      </button>
		    </div>	
		</div>					

	</form>
		
    </div>
</div>
		);
	}
}


