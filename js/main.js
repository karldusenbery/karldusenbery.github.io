// When you click on .hamburger
$('.hamburger').on('click', function () {
	// Slide toggle the menu
	$('#menu').toggleClass('open');
	console.log('You clicked the hamburger');
});