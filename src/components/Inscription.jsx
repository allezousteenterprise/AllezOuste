import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Inscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
	    identifiant: '',
            email: '',
	        nom: '',
	        prenom: '',
            password: '',
            password_confirm: '',
            errors: {},
            history:this.props.history
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _onclickInscription(){
		this.state.history.push({pathname:"/TestServlet/connexion"});
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

	//Servlet
	axios.post('/TestServlet/inscription', { user })
	.then(res => {
            var resultat = JSON.parse(res.data);
            if (resultat.code===400) {
                alert(resultat.failed);
            }else{
		 if(resultat.code===200){
			alert("Inscription réussie. Vous pouvez à présent vous connecter!");
			this._onclickInscription();
		}else{
	    		alert(resultat.success);	
		}
	   }
        })
    }

    render(){
	return (

<div>
    <Navbar history={this.state.history}/>
    <div className="w3-display-middle w3-margin-top w3-center w3-card-4">

	<div className="w3-container w3-teal">
		<h2>Inscription</h2>
	</div>
      
	<form className="w3-container  w3-padding-24" onSubmit={ this.handleSubmit }>
		<div>
			<p></p>
		    <div>
		      <input type="text"
                 placeholder="Identifiant"
                 className="w3-input w3-border w3-round w3-light-grey"
                 name="identifiant"
                 required
                 onChange={ this.handleInputChange }
			     value={ this.state.identifiant } />
		    </div>

			<p></p>

		    <div>
		      <input type="email"
                    placeholder="Email"
                    className="w3-input w3-border w3-round w3-light-grey"
                    name="email"
                    required
                    onChange={ this.handleInputChange }
                    value={ this.state.email } />
		    </div>
			<p></p>

		    <div>
		      <input type="text"
                     placeholder="Nom"
                     className="w3-input w3-border w3-round w3-light-grey"
                     name="nom"
                     required
                     onChange={ this.handleInputChange }
                     value={ this.state.nom }
                     />
		    </div>
			<p></p>

		    <div>
		      <input type="text"
                     placeholder="Prenom"
                     className="w3-input w3-border w3-round w3-light-grey"
                     name="prenom"
                     required
                     onChange={ this.handleInputChange }
                     value={ this.state.prenom } />
		    </div>
			<p></p>

		    <div >
		      <input type="password"
                    placeholder="Mot de Passe"
                    className="w3-input w3-border w3-round w3-light-grey"
                    name="password"
                    required
                    onChange={ this.handleInputChange }
                    value={ this.state.password } />
		    </div>
			<p></p>
		
		    <div>
		      <input type="password"
                    placeholder="Confirmation MotDePasse"
                    className="w3-input w3-border w3-round w3-light-grey"
                    name="password_confirm"
                    required
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm } />
		    </div>
			<p></p>

		    <div>
	 	      <button type="submit" className="w3-center w3-button w3-round-xxlarge w3-medium w3-border w3-padding-large w3-ripple">
				Inscrivez-vous !
		      </button>
		    </div>	
		</div>					

	</form>
		
    </div>
</div>		)
	}
}
