<%@ page language="C#" autoeventwireup="true" inherits="_Default, App_Web_fp1fwhwj" %>

<!DOCTYPE html />
<html>
<head>
    <link type="text/css" rel="stylesheet" href="posters.css">
	<script type="text/javascript" src="jquery/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="jquery/background.js"></script>
    <script type="text/javascript" src="jquery/posters.js"></script>
  <style>
    body {
      background: Black;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position:absolute;
    }
	</style>
	<script>
	    $(document).ready(function () {
	        $("canvas.snow").let_it_snow();
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
</head>
<body>
  <canvas width="100%" height="100%" class="snow"></canvas>
  <center><div id="posters1"></div></center>
</body>
</html>