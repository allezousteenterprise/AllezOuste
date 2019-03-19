import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class Voyages extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    voyages: {},
            	    history:this.props.history
		}

		axios.post('/TestServlet/voyages').then(res => {
			console.log(res);	
			console.log(res.data);		
			//var resultat = JSON.stringify(res.data);			
			//console.log(resultat);
			var resultat2 = JSON.parse(res.data);
			console.log(resultat2);
			console.log(resultat2["code"]);
			console.log(resultat2["success"][1]);
			console.log(resultat2["success"][1]["voy_id"]);
			console.log(resultat2["success"].length);

			var var1,data=[], cle=0;
			for(var i=0; i < resultat2["success"].length; i++){
				var1 = <div key={cle} className="w3-col l3 m6 w3-margin-bottom">
						<img key={cle++} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lopez_scaling_seawall.jpg/479px-Lopez_scaling_seawall.jpg" style="width:100%;"  />
						<h3 key={cle++}> {resultat2["success"][i]["voy_nom"]}</h3>
						<p key={cle++} className="w3-opacity">{resultat2["success"][i]["voy_type"]}</p>
						<p key={cle++}> {resultat2["success"][i]["voy_prix"]} euros</p>
						<p key={cle++}><button key={cle++} className="w3-button w3-light-grey w3-block">Voir plus d\'informations</button></p>
					</div>;
				data.push(var1);
				console.log("i = "+i);
				console.log(var1);
				cle++

			}
				this.setState({voyages:data});
				console.log(data);
				console.log(this.state.voyages);
			

		});
	}

	render(){
		return (

<div>
	<Navbar history={this.state.history}/>
	<div className="w3-margin-top w3-padding-48">
		<h1 className="w3-padding-16 w3-center w3-teal">Voyages disponibles</h1>

		  <div className="w3-row-padding w3-grayscale">
			    {this.state.voyages}
		  </div>
	</div>
</div>
		);
	}
}
