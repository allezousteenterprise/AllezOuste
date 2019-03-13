
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>


<html>
<head>
<meta charset="UTF-8">
<title>Accueil</title>
</head>
<body>

<h1>Accueil</h1>

<!-- on recupère l'attribut de session -->
<c:set var = "m" scope = "request" 
	value = "${mess}"/>
	
<!-- on supprime l'attribut de session -->
<c:remove var="mess"/>

<h2>m = ${m}</h2>


</body>
</html>

