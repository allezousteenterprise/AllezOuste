
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>


<html>
<head>
<meta charset="UTF-8">
<title>Enregistrer livre</title>
</head>
<body>


<form method="post">
	<table>
		<tr>
			<td>Titre : </td>
			<td><input type="text" name="titre" 
				value="${validation.valeurs['titre']}" ></td>
			<td>${validation.erreurs['titre']}</td>
		</tr>
		<tr>
			<td>Auteur : </td>
			<td><input type="text" name="auteur" 
				value="${validation.valeurs['auteur']}" ></td>
			<td>${validation.erreurs['auteur']}</td>
		</tr>
		<tr>
			<td>Année : </td>
			<td><input type="text" name="annee" 
				value="${validation.valeurs['annee']}" ></td>
			<td>${validation.erreurs['annee']}</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td><input type="submit" name="submit" 
				value="Enregistrer" ></td>
		</tr>
	</table>
	
	
</form>

</body>
</html>

