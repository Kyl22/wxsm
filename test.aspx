<%@ page language="C#" autoeventwireup="true" inherits="test, App_Web_sd4yv51g" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link type="text/css" rel="stylesheet" href="css/_2048.css"/>
	<script type="text/javascript" src="jquery/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="jquery/_2048.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#test")._2048();
        });
        
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="test" style="width:100%"></div>

    </form>
</body>
</html>
