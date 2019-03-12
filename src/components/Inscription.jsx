import React, { Component } from 'react';
//import axios from 'axios';
import Navbar from './Navbar';

export default class Inscription extends Component {
	render(){
		return (
<div>
    <Navbar/>
    <div class="w3-display-middle w3-margin-top w3-center w3-card-4">

	<div class="w3-container w3-teal">
		<h2>Inscription</h2>
	</div>
      
	<form class="w3-container  w3-padding-24">
		<div>
			<p></p>
		    <div>
		      <input
			 type="text"
			 placeholder="Identifiant"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="identifiant"
			 required/>
		    </div>

			<p></p>

		    <div>
		      <input
			type="email"
			placeholder="Email"
			class="w3-input w3-border w3-round w3-light-grey"
			name="email"
			required/>
		    </div>
			<p></p>

		    <div>
		      <input
			 type="text"
			 placeholder="Nom"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="nom"
			 required/>
		    </div>
			<p></p>

		    <div>
		      <input
			 type="text"
			 placeholder="Prenom"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="prenom"
			 required/>
		    </div>
			<p></p>

		    <div >
		      <input
			type="password"
			placeholder="Mot de Passe"
			class="w3-input w3-border w3-round w3-light-grey"
			name="password"
			required/>
		    </div>
			<p></p>
		
		    <div>
		      <input
			type="password"
			placeholder="Confirmation MotDePasse"
			class="w3-input w3-border w3-round w3-light-grey"
			name="confirmationpassword"
			required/>
		    </div>
			<p></p>

		    <div>
	 	      <button type="submit" class="w3-center
			w3-button w3-round-xxlarge w3-medium w3-border w3-padding-large w3-ripple">
				Inscrivez-vous !
		      </button>
		    </div>	
		</div>					

	</form>
		
    </div>
</div>		);
	}
}
