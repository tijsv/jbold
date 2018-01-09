$(document).ready(function(){

	var hidden = false;
	var windowHeight = $(window).height();

	$(document).scroll(function() {
        if ($(window).scrollTop() >= (windowHeight/4)) {
        	if (hidden === false) {
        		$(".cta").animate({
	            	opacity: '0',
	            }, 500); 
	            $("#story .title").animate({
					opacity: '1',
					marginLeft: '0',
				}, 1000, function() {
					$("#story .text").animate({
						opacity: '1',
						marginLeft: '0',
					}, 500);
				});
				hidden = true;
        	}
        	
        } else if ($(window).scrollTop() < (windowHeight/4)) {
        	if (hidden === true) {
	        	$(".cta").animate({
	            	opacity: '1',
	            }, 500);
	            $("#story .title").animate({
					opacity: '0',
					marginLeft: '-=40px',
				}, 500, function() {
					$("#story .text").animate({
						opacity: '0',
						marginLeft: '-=40px',
					}, 500);
				}); 
	            hidden = false;
	        }
        }
    });

	var transparantiewaarde = 0.7; 
	var transparantiedirection = 0; // stijgen: 0, dalen: 1

	function transparantie() {
		if (transparantiedirection === 0) {
			transparantiewaarde += 0.005;
		} else {
			transparantiewaarde -= 0.005;
		}
		if (transparantiewaarde > 0.8) {
			transparantiedirection = 1;
		} else if (transparantiewaarde < 0.4) {
			transparantiedirection = 0;
		}
		document.getElementById("main").style.backgroundColor = "rgba(8, 15, 15, " + transparantiewaarde + ")";
		// console.log(transparantiewaarde);
	}

	var interval = setInterval(function(){ transparantie() }, 100); // gaat elke 100ms de transparantiewaarde aanpassen

});



