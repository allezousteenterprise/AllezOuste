var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'obiwan2.univ-brest.fr',
  	user     : 'zle_papre',
  	password : '2zc7yegl',
  	database : 'zfm1-zle_papre'
});


connection.connect(function(err){
	if(!err) {
		console.log("Connexion à la base de données effectuée !");
	}else{
		console.log("Erreur de connexion à la base de données !");
	}

});



/*action inscription*/
exports.register = function(req,res){

	var obj = JSON.parse(req.body.json);

  	var users={
    		"cli_pseudo":obj.user.identifiant,
    		"cli_mdp":obj.user.password,
		"cli_prenom":obj.user.prenom,
		"cli_nom":obj.user.nom,
		"cli_mail":obj.user.email
  	}


	console.log(users);

	try{
		
		//Verification si pseudonyme existe
		connection.query('SELECT * FROM t_client_cli WHERE cli_pseudo = ?',[obj.user.identifiant], function (error, results, fields) {

    			if(results.length >= 1){
				console.log(1);
				res.send({
					"code":202,
					"success":"Le pseudonyme existe déjà dans la base de données. Veuillez en choisir un nouveau !"
				});

			}else if(obj.user.password !== obj.user.password_confirm){
				console.log(2);
				res.send({
	      				"code":201,
	      				"success":"Le mot de passe et sa confirmation doivent être pareils !"
				});

			}else if(error) {
				console.log(3);
				res.send({
					"code":400,
					"failed":"Une erreur est survenue lors de la connexion !"
				});

			}else{
				console.log(4);
				connection.query('INSERT INTO t_client_cli SET ?',users, function (error, results, fields) {
					res.send({
						"code":200,							
						"success":"Un nouvel utilisateur est enregistré dans la base de données !"
					});
				});
			}
			
  		});

	} catch (err){
		console.log(err);
	}

}


/*action de connexion*/
exports.login = function(req,res){
	
	var obj = JSON.parse(req.body.json);

	var identifiant = obj.user.identifiant;
  	var password = obj.user.password;

	try{

	  	connection.query('SELECT * FROM t_client_cli WHERE cli_pseudo = ?',[identifiant], function (error, results, fields) {
	  		if(error){
	    			console.log("Une erreur est survenue lors de la connexion",error);
	    			res.send({
	      				"code":400,
	      				"failed":"Une erreur est survenue lors de la connexion !"
	    			})
	  		}else{
				console.log(results);
	    			if(results.length >0){
	      				if(results[0].cli_mdp == password){
						console.log("L\'utilisateur "+identifiant+" est maintenant connecté !");
						res.send({
		  					"code":200,
		  					"success": obj
		    				});

						
	      				}
	      				else{
						console.log("L\'identifiant et le mot de passe ne correspondent pas !");
						res.send({
		  					"code":201,
		  					"success":"L\'identifiant et le mot de passe ne correspondent pas !"
		    				});
	      				}
	    			}
	    			else{
					console.log("L\'identifiant entrée n\'existe pas dans la base de données. Veuillez vérifier !");
	      				res.send({
						"code":202,
						"success":"L\'identifiant entré n\'existe pas. Veuillez réessayer !"
		  			});
	    			}
	  		}
	  	}); 

	} catch (err){
		console.log(err);
	}
}


/*recuperation de la liste de voyage*/
exports.voyages = function(req,res){
	try{

	  	connection.query('SELECT * FROM t_voyage_voy', function (error, results, fields) {
	  		if(error){
	    			console.log("Une erreur est survenue lors de la connexion",error);
	    			res.send({
	      				"code":201,
	      				"failed":"Une erreur est survenue lors de la connexion !"
	    			})
	  		}else{
	    			if(results.length == 0){
					console.log("Aucune ligne trouvé dans la table voyage !");
					res.send({
	  					"code":203,
	  					"success":"Pas de voyage disponible !"
	    				});
	    			}
	    			else{
					console.log(results);
					res.send({
						"code":200,
						"success":results,
		  			});
					//res.json(results);
	    			}
	  		}
	  	});

	} catch (err){
		console.log(err);
	}
}


/*action inscription*/
exports.panier = function(req,res){

	var obj = JSON.parse(req.body.json);

  	var users={
    		"res_voy_id":obj.user.identifiant,
    		"res_cli_id":obj.user.password,
		"res_etat":obj.user.prenom,
  	}


	console.log(users);
	var insertion = false;

	try{
		
		//Verification si pseudonyme existe
		connection.query('SELECT * FROM t_client_cli WHERE cli_pseudo = ?',[obj.user.identifiant], function (error, results, fields) {

    			if(results.length >= 1){
				console.log(1);
				res.send({
					"code":202,
					"success":"Le pseudonyme existe déjà dans la base de données. Veuillez en choisir un nouveau !"
				});

			}else if(obj.user.password !== obj.user.password_confirm){
				console.log(2);
				res.send({
	      				"code":201,
	      				"success":"Le mot de passe et sa confirmation doivent être pareils !"
				});

			}else if(error) {
				console.log(3);
				res.send({
					"code":400,
					"failed":"Une erreur est survenue lors de la connexion !"
				});

			}else{
				console.log(4);
				connection.query('INSERT INTO t_client_cli SET ?',users, function (error, results, fields) {
					res.send({
						"code":200,							
						"success":"Un nouvel utilisateur est enregistré dans la base de données !"
					});
				});
			}
			
  		});

	} catch (err){
		console.log(err);
	}

}


