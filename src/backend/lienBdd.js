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
	}else {
    		console.log("Erreur de connexion à la base de données !");
	}
});


/*action inscription*/
exports.register = function(req,res){
  	console.log("req",req.body);
  	var users={
    		"cli_pseudo":req.body.user.identifiant,
    		"cli_mdp":req.body.user.password,
		"cli_prenom":req.body.user.prenom,
		"cli_nom":req.body.user.nom,
		"cli_mail":req.body.user.email
  	}

	var loginTest = req.body.user.identifiant;
  	connection.query('INSERT INTO t_client_cli SET ?',users, function (error, results, fields) {
		//select of databaselines with same identify 
		connection.query('SELECT * FROM t_client_cli WHERE cli_pseudo = ?',[loginTest], function (error, results, fields) {

			console.log("nombre utilisateur au pseudo de connect", results.length);
    			if(results.length >= 2){
				console.log("Le pseudonyme existe déjà dans la base de données. Veuillez en choisir un nouveau !");
				res.send({
					"code":202,
					"success":"Le pseudonyme existe déjà dans la base de données. Veuillez en choisir un nouveau !"
				});
			}
			//case of insert line into table
			else{
				if(req.body.user.password !== req.body.user.password_confirm){
					console.log("Le mot de passe et sa confirmation doivent être pareil !");
					res.send({
		      				"code":201,
		      				"success":"Le mot de passe et sa confirmation doivent être pareil !"
					});
				}
  				else if(error) {
    					console.log("Une erreur est survenue lors de la connexion !",error);
    					res.send({
      						"code":400,
      						"failed":"Une erreur est survenue lors de la connexion !"
    					})
  				}else{
					console.log("Un nouvel utilisateur est enregistré dans la base de données !");
    					res.send({
      						"code":200,
      						"success":"Un nouvel utilisateur est enregistré dans la base de données !"
					});
  				}
			}
			
  		});
  	});
}


/*action de connexion*/
exports.login = function(req,res){
  	var identifiant = req.body.user.identifiant;
  	var password = req.body.user.password;

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
					console.log("L\'utilisateur est connecté à la base de données !");
        				res.send({
          					"code":200,
          					"success":"L\'utilisateur est connecté à la base de données !"
            				});
      				}
      				else{
					console.log("L\'identifiant et mot de passe ne correspondent pas !");
        				res.send({
          					"code":201,
          					"success":"L\'identifiant et mot de passe ne correspondent pas !"
            				});
      				}
    			}
    			else{
				console.log("L\'identifiant entrée n\'existe pas dans la base de données. Veuillez vérifier !");
      				res.send({
        				"code":202,
        				"success":"L\'identifiant entrée n\'existe pas dans la base de données. Veuillez vérifier !"
          			});
    			}
  		}
  	});
}


/*recuperation de la liste de voyage*/
exports.voyage = function(req,res){
  	connection.query('SELECT * FROM t_voyage_voy', function (error, results, fields) {
  		if(error){
    			console.log("Une erreur est survenue lors de la connexion",error);
    			res.send({
      				"code":400,
      				"failed":"Une erreur est survenue lors de la connexion !"
    			})
  		}else{
    			if(results.length == 0){
				console.log("Aucune ligne trouvé dans la table cours !");
				res.send({
  					"code":200,
  					"success":"Pas de voyage disponible !"
    				});
    			}
    			else{
				var i=0;
				var monSet = new Set();
				for(i=0; i<results.length; i++){
					var user = {
					    id_cours: results[i].id_cours,
					    titres: results[i].titres
					}
					monSet.add(user);
				}
				//console.log("ligne dans le set", monSet.size);
				console.log("on a", monSet);
				res.send({
					"code":201,
					"success":monSet,
	  			});
    			}
  		}
  	});
}

/*Recuperation de la liste des destinations*/
exports.destinations = function(req,res){
  	connection.query('SELECT voy_nom FROM t_voyage_voy', function (error, results, fields) {
  		if(error){
    			console.log("Une erreur est survenue lors de la connexion",error);
    			res.send({
      				"code":400,
      				"failed":"Une erreur est survenue lors de la connexion !"
    			})
  		}else{
    			if(results.length == 0){
				console.log("Aucune ligne trouvé dans la table cours !");
				res.send({
  					"code":200,
  					"success":"Pas de voyages disponibles !"
    				});
    			}
    			else{
				var i=0;
				var monSet = new Set();
				for(i=0; i<results.length; i++){
					monSet.add(results[i].voy_nom);
				}

				console.log("DestinationsDisponibles", monSet);
				res.send({
					"code":201,
					"success":monSet,
	  			});
    			}
  		}
  	});
}
