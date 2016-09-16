/* ==============================================
MAP -->
=============================================== */

var locations = [
	['<div class="infobox"><h3 class="title"><a href="about.html">MY USA OFFICE</a></h3><span>NEW YORK CITY 4102 / 52</span><br><span>+71 325 988 32 81</span></div>', -37.812154, 144.954619, 2]
	];     
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		scrollwheel: false,
		navigationControl: true,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		styles: [ { "stylers": [ { "hue": "#ffffff" },  {saturation: -100},
		{gamma: 2} ] } ],
		center: new google.maps.LatLng(-37.812154, 144.954619),
		mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var infowindow = new google.maps.InfoWindow();
		var marker, i;
		for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({ 
		position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
		map: map ,
		icon: 'img/marker.png'
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		infowindow.setContent(locations[i][0]);
		infowindow.open(map, marker);
	}
	})(marker, i));
}
