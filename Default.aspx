<%@ page language="C#" autoeventwireup="true" inherits="_Default, App_Web_zy5uzf2k" %>

<!DOCTYPE html />
<html>
<head>
    <title>wxsm</title>
    <link type="text/css" rel="stylesheet" href="css/posters.css"/>
	<script type="text/javascript" src="jquery/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="jquery/posters.js"></script>
    <link type="text/css" rel="stylesheet" href="css/_2048.css"/>
    <script type="text/javascript" src="jquery/_2048.js"></script>
    <!--
	<script type="text/javascript">
	    $(document).ready(function () {
	    
        var posters1 = new posters('posters1', { className: "posters" },
        [{ "img": "images\/1.jpg", "url": "images\/1.jpg" },
        { "img": "images\/2.jpg", "url": "images\/2.jpg" },
        { "img": "images\/3.jpg", "url": "images\/3.jpg" },
        { "img": "images\/4.jpg", "url": "images\/4.jpg" },
        { "img": "images\/5.jpg", "url": "images\/5.jpg" },
        { "img": "images\/6.jpg", "url": "images\/6.jpg" },
        { "img": "images\/7.jpg", "url": "images\/7.jpg" },
        { "img": "images\/8.jpg", "url": "images\/8.jpg" },
        { "img": "images\/9.jpg", "url": "images\/9.jpg" },
        { "img": "images\/10.jpg", "url": "images\/10.jpg" },
        { "img": "images\/11.jpg", "url": "images\/11.jpg" },
        { "img": "images\/12.jpg", "url": "images\/12.jpg" },
        { "img": "images\/13.jpg", "url": "images\/13.jpg" },
        { "img": "images\/14.jpg", "url": "images\/14.jpg"}]
        );
        });
	</script>
    -->
    <script type="text/javascript">
        $(document).ready(function () {
            $("#_2048")._2048();
           
        });
    </script>

    
</head>
<body style="background-color:Black">
    <form id="form1" runat="server">

    <div id="_2048" style="width:100%"></div>
    
        <!--<center><div id="posters1"></div></center>-->
        

    </form>
</body>
</html>