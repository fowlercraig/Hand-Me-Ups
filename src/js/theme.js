// @codekit-append "_notifications.js"

function homeEqualize() {

	$('#home--map').equalize({
		target:   '.equalize',
		minWidth: '740px'
	});

}

$(document).ready(function(){

	homeEqualize();
   $(".wallpaper").background();
	
});