<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<html>
<head>
<meta charset="UTF-8">
<title>Lister Utilisateurs</title>
</head>
<body>


<h1>Liste des utilisateurs</h1>

<ul>
<c:forEach items="${lst}" var="item">
<li>${item.cli_nom}</li>
</c:forEach>
</ul>

</body>
</html>

