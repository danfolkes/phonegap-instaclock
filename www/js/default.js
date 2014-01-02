jQuery(function (){
	jQuery('.gallery').flexslider({controlNav:false});
	//initIeFunctions();
	
	//var navItems = jQuery('#mainNav li');
	//navItems.find('a').click(function (){
	//	navItems.removeClass('active');
//		this.parentNode.className += ' active';
//	});
	
	//initScrollNav({
	//	nav:'#mainNav a'
	//});

	//initValidation();
});
function initIeFunctions(){
	if(jQuery.browser.msie){
		createFormValues();
		clearInputs();
	}
}

function createFormValues(){
	jQuery("input[type='text'], textarea").each(function (){
		this.value = jQuery(this).attr('placeholder');
	});
}

function clearInputs(){
	jQuery('input:text, input:password, textarea').each(function(){
		var _el = jQuery(this);
		_el.data('val', _el.val());
		_el.bind('focus', function(){
			if(_el.val() == _el.data('val')) _el.val('');
		}).bind('blur', function(){
			if(_el.val() == '') _el.val(_el.data('val'));
		});
	});
}

function initScrollNav(_options){
	var options = jQuery.extend({
		nav:'#nav a',
		animSpeed:750
	}, _options);
	var window = jQuery('html,body');
	var addingHeight = jQuery("#header").outerHeight(true);
	
	var nav = jQuery(options.nav);;
	nav.each(function (){
		var hold = jQuery(this);
		var block = jQuery(hold.attr('href'));
		if(block.length){
			hold.click(function (){
				var curPos = window.scrollTop();
				var blockPost = block.offset().top - addingHeight;
				
				window.stop().animate({scrollTop: blockPost},{duration: options.animSpeed});
				return false;
			});
		}
	});
}


			var tag="8pm";
			var prevsec = "";
			var prevmin = "";
			var prevhour = "";
			var tagprefix = "InstaClock";
			var tagdisplayprefix = "#InstaClock";
			var clientid = "d1ef059c546f4256971878aa85def5f8";
			var clientid_client = "77f56f72dd8945feaa55871fd023a186";
			var ig_access_token = "";
			
			function GetImage(tag, resultselector, random) {
				var bodySel = resultselector+" .clockBody";
				var slideSel = resultselector+" .cycle-slideshow";
				var slideNavSel = resultselector+" .nav";
				$.ajax({
				  type: "GET",
				  dataType: "jsonp",
				  cache: false,
				  url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?access_token=" + ig_access_token,
				  success: function(response) {
					//$(resultselector).hide();
					var photoCount = 99;
					var length = response.data != 'undefined' ? response.data.length : 0;
					if (length > 0) {
						response.data.sort(sortfunction);
							//$(resultselector).append('  <img src="http://malsup.github.com/images/beach1.jpg" width="200" height="200" />");
								//$(resultselector).append($('<img>', {
									//src: response.data[1].images.low_resolution.url
									//}));
						var limit = photoCount != null && photoCount < length ? photoCount : length;
						var slideobj = $(slideSel);
						
						if(limit > 0) {
							for(var i = 0; i < 100; i++) {
								try {
									$(slideSel).cycle('remove', 0);
								} catch (e) {
									var err = e;
								}
							}
							for(var i = 0; i < limit; i++) {
								try {
									var divOuter = document.createElement('div');
									
									var div1 = document.createElement('div');
										var span = document.createElement('span');
										var aHash = document.createElement('a');
										aHash.innerHTML = " #" + tag;
										aHash.setAttribute('href','#');
										$(div1).append(span);
									$(div1).append(aHash);
									
									var div2 = document.createElement('div');
										var img = document.createElement('img');
										img.src=response.data[i].images.low_resolution.url;
									$(div2).append(img);
									
									var div3 = document.createElement('div');
										var aHearts = document.createElement('a');
										aHearts.setAttribute('href',response.data[i].link);
										aHearts.innerHTML = "&hearts; " + response.data[i].likes.count;
										$(div3).append(aHearts);
										var aIG = document.createElement('a');
										aIG.setAttribute('href',response.data[i].link);
										aIG.innerHTML = "  |  Instagram";
									$(div3).append(aIG);
									
									$(divOuter).append(div1);
									$(divOuter).append(div2);
									$(divOuter).append(div3);
									$(slideSel).cycle('add', divOuter);
									$(resultselector).show();
								} catch (e) {
									var err = e;
								} 
							}
						}
					}
				  },
				  error: function(XMLHttpRequest, textStatus, errorThrown) {
					//$(resultselector).hide();
				  }
				});
			}
			function StartEverything() {
			  // Handler for .ready() called.
				UpdateTime();
			
				setInterval( function() {
				// Create a newDate() object and extract the minutes of the current time on the visitor's
					UpdateTime();
				},100);
			}
			function getHashValue(key) {
				try {
					return location.hash.match(new RegExp(key+'=([^&]*)'))[1];
				}
				catch (e){
					return "";
				}
			}



			$(function() {
				ig_access_token = amplify.store( "ig_access_token" );
				ig_access_token = typeof ig_access_token !== 'undefined' ? ig_access_token : "";
				
				if (ig_access_token.length <= 0) {
					//try and get it from the url:
					var hasha_access_token = getHashValue('access_token');
					if (hasha_access_token.length >0)
						ig_access_token = hasha_access_token;
					
				}
				
				$("#loading").hide();
				if (ig_access_token.length > 0) {
					amplify.store( "ig_access_token", ig_access_token );
					
					$("#bigloginbutton").hide();
					$("#biglogoutbutton").show();
					$("#content").show();
					StartEverything();
				} else {
					$("#bigloginbutton").show();
					$("#biglogoutbutton").hide();
					$("#content").hide();
				}
			});
			
			

			function sortfunction(a, b){
				return a.likes.count - b.likes.count;
			//Compare "a" and "b" in some fashion, and return -1, 0, or 1
			}
			
			var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
			var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

			// Create a newDate() object
			var newDate = new Date();
			// Extract the current date from Date object
			newDate.setDate(newDate.getDate());
			

	
function UpdateTime() {

		// Output the day, date, month and year
	newDate.setDate(newDate.getDate());
	
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	var tagS=( seconds < 10 ? "0" : "" ) + seconds;
	if (prevsec != tagS) {
		prevsec = tagS;
		//GetImage(tagprefix+tagS,"div.clockS");
		$("#sec").html(tagS);
		$( ".blinker" ).toggleClass( "light" );
		//$('.cycle-slideshow').cycle('next');
	}
	
	
	
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	var tagM=( minutes < 10 ? "0" : "" ) + minutes;
	if (tagM != prevmin) {
		prevmin = tagM;
		
		GetImage(tagprefix+tagM[0],"div.clockM");
		GetImage(tagprefix+tagM[1],"div.clockM2");
		GetImage(tagprefix+"s","div.clockS");
	}
	$("#min").html(tagdisplayprefix+tagM);
	
	var hours = new Date().getHours();
	if (hours > 12) {
		hours -= 12;
	}
	// Add a leading zero to the hours value
	var tagH=( hours < 10 ? "0" : "" ) + hours;
	if (prevhour != tagH) {
		prevhour = tagH;
		GetImage(tagprefix+tagH[0],"div.clockH");
		GetImage(tagprefix+tagH[1],"div.clockH2");
		GetImage(tagprefix+""+newDate.getFullYear(),"div.clockYear");
		GetImage(tagprefix+""+monthNames[newDate.getMonth()],"div.clockMonth");
		GetImage(tagprefix+""+dayNames[newDate.getDay()],"div.clockDay");
	}
	$("#hours").html(tagdisplayprefix+tagH);
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	$("#year").html(tagdisplayprefix+newDate.getFullYear());
	$("#month").html(tagdisplayprefix+monthNames[newDate.getMonth()]);
	$("#day").html(tagdisplayprefix+dayNames[newDate.getDay()]);
}