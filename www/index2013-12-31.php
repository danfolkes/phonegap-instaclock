<html>
	<head>
		<title>InstaClock</title>
		<meta charset="utf-8" />
		<meta name = "viewport" content = "width=device-width, maximum-scale = 1, minimum-scale=1" />
		<link rel="stylesheet" type="text/css" href="css/main.css?v=20133112.css" media="all" />
		<!--<link rel="stylesheet" type="text/css" href="css/default.css" media="all" />
		<link rel="stylesheet" href="css/flexslider.css" type="text/css" />
		<link rel="stylesheet" href="css/fixed-navigation.css" type="text/css" />-->
		<link href='css/fontfamilyLilyScriptOne.css' rel='stylesheet' type='text/css'>
		<!--<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css' />-->
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.cycle2.min.js"></script>
		<script src="js/jquery.cycle2.flip.min.js"></script>
		<script src="js/amplify.js"></script>
		<script src="js/jquery.flexslider.js"></script>
		<script src="js/default.js"></script>
		<!--[if lt IE 9]>
			<script src="js/html5.js"></script>
			<script src="js/respond.min.js"></script>
		<![endif]-->
	</head>
<body>
	<div id="pagewidth">
		<header id="header">
			<div class="center">
				<nav id="mainNav">
					<h1 class='logo'>InstaClock</h1>
					<!--<ul>
						<li class="active"><a href="#pagewidth"><span>gallery</span></a></li>
						<li><a href="#twoColumnLayout"><span>2 columns</span></a></li>
						<li><a href="#threeColumnLayout"><span>3 columns</span></a></li>
						<li><a href="#boxes"><span>boxes</span></a></li>
						<li><a href="#testiomonialsTab"><span>testimonials</span></a></li>
						<li><a href="#contactUs"><span>contact us</span></a></li>
					</ul>-->
				</nav>
			</div>
		</header>
		<div id="loading" style=''>
			<section id="loading_section" class="row grey">
				<div class="center">
					<h1>loading...</h1>
				</div>
			</section>
		</div>
		<div id="bigloginbutton" style='display:none;'>
			<section id="bigloginbutton_section" class="row grey">
				<div class="center">
					<h1><a id="ig-button" href="https://instagram.com/oauth/authorize/?client_id=77f56f72dd8945feaa55871fd023a186&redirect_uri=http://lab.danfolkes.com/etc/aaa/instaclock/&response_type=token">Login to Instagram</a></h1>
					
				</div>
			</section>
		</div>
		<div id="content" style='display:none;'>
			<section id="twoColumnLayout" class="row">
				<div class="center">
					<div class="container">
						<div class="clock">
							<div id="Date" style='display:none'>
								<span id="hours"> </span>
								<span id="clockH"></span>
								<span id="min"> </span>
								<span id="clockM"></span>
								<span id="day"> </span>
								<span class="clockBody"></span>
								<span id="month"> </span>
								<span id="clockMonth"></span>
								<span id="year"> </span>
								<span id="clockYear"></span>
								<span id="sec"> </span>
								<span id="clockS"></span>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="oneForth clockH">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true" data-cycle-auto-height="400:300"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
						<div class="oneForth clockH2">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true" data-cycle-auto-height="400:300"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
						<div class='oneForth blinker'>:</div>
						<div class="oneForth clockM">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true" data-cycle-auto-height="400:300"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
						<div class="oneForth clockM2">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true" data-cycle-auto-height="400:300"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="twoColumnLayout" class="row grey">
				<div class="center">
					<!--<h1>Two Column Layout</h1>
					<strong class="subHeading">lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>-->
					<div class="columns">
						<div class="half clockDay">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
						<div class="half clockMonth">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true"
									data-cycle-timeout="0">
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="twoColumnLayout" class="row">
				<div class="center">
					<!--<h1>Two Column Layout</h1>
					<strong class="subHeading">lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>-->
					<div class="columns">
						<div class="half clockYear">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true"
									data-cycle-timeout="0">
								<span class="cycle-caption"></span>
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
						<div class="half clockS">
							<div class="cycle-slideshow" 
									data-cycle-fx="fadeout" data-cycle-pause-on-hover="true" data-cycle-auto-height="400:300"
									data-cycle-timeout="0">
								<span class="cycle-caption"></span>
								<a href='javascript:void(0);' class="cycle-prev">prev</a>
								<a href='javascript:void(0);' class="cycle-next">next</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="biglogoutbutton" class="row grey">
				<div class="center">
					<h1>Settings</h1>
					<strong class="subHeading">lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>
					<div class="columns">
						<div class="half">
							lorem ipsum dolor sit amet, consectetur adipiscing elit
						</div>
						<div class="half">
							<h2><button id="ig-button"  onclick='if (confirm("Logout?")) {amplify.store( "ig_access_token", "" ); window.location="./";}'>Logout of Instagram</button></h2>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
	</body>
</html>