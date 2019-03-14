<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<html>
<head>
<meta charset="UTF-8">
<title>Lister Voyages</title>
</head>
<body>


<h1>Liste des voyages</h1>

<ul>
<c:forEach items="${lst}" var="item">
<li>${item.voy_nom}</li>
</c:forEach>
</ul>

</body>
</html>

