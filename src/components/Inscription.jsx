import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Inscription extends Component {

    constructor() {
        super();
        this.state = {
	    identifiant: '',
            email: '',
	    nom: '',
	    prenom: '',
            password: '',
            password_confirm: '',
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
	    nom: this.state.nom,
	    prenom: this.state.prenom,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        console.log(user);
	axios.post(`/api/register`, { user })
      .then(res => {
        console.log(res);
        if (res.data.code==="400") {
            alert(res.data.failed);
        }else{
		if(res.data.code===200)
			document.location.href="/inscrit";
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
			 required
			 onChange={ this.handleInputChange }
			 value={ this.state.identifiant }/>
		    </div>

			<p></p>

		    <div>
		      <input
			type="email"
			placeholder="Email"
			class="w3-input w3-border w3-round w3-light-grey"
			name="email"
			required
			onChange={ this.handleInputChange }
			value={ this.state.email }
			/>
		    </div>
			<p></p>

		    <div>
		      <input
			 type="text"
			 placeholder="Nom"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="nom"
			 required
			 onChange={ this.handleInputChange }
			 value={ this.state.nom }
			 />
		    </div>
			<p></p>

		    <div>
		      <input
			 type="text"
			 placeholder="Prenom"
			 class="w3-input w3-border w3-round w3-light-grey"
			 name="prenom"
			 required
			 onChange={ this.handleInputChange }
			 value={ this.state.prenom }
			 />
		    </div>
			<p></p>

		    <div >
		      <input
			type="password"
			placeholder="Mot de Passe"
			class="w3-input w3-border w3-round w3-light-grey"
			name="password"
			required
			onChange={ this.handleInputChange }
			value={ this.state.password }
			/>
		    </div>
			<p></p>
		
		    <div>
		      <input
			type="password"
			placeholder="Confirmation MotDePasse"
			class="w3-input w3-border w3-round w3-light-grey"
			name="password_confirm"
			required
			onChange={ this.handleInputChange }
			value={ this.state.password_confirm }
			/>
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
</div>		)
	}
}
