// When you click on .hamburger
$('.hamburger').on('click', function () {
	// Slide toggle the menu
	$('#menu').toggleClass('open');
	console.log('You clicked the hamburger');
});

//create an int varible to keep track of left margin transition
// var leftMargin = 0;

//create an String varible to keep track of left margin transition
// var leftMarginString = "";

// Every 3 seconds display a new random image in the .banner
// setInterval(function() {

// 		//subtract 100 form leftMargin int
// 		leftMargin -= 100;

// 		/* contruct a string from leftMargin to place in CSS */

// 		//convert leftMargin int value to a String
// 		leftMarginString = leftMargin.toString();

// 		//append a "%" to the leftMarginString variable
// 		leftMarginString = leftMarginString + "%";


// 		/* slide in from the right the next image
// 		   by setting margin-left -% */
// 		$('#bannerImg').css('margin-left', leftMarginString);

// }, 3000);

// Every 3 seconds display a new random image in the .banner
setInterval(function() {
	// Add .img-moved-left to first image (look up first-of-type)
	$('#bannerImg div:first-of-type').addClass('img-moved-left');

}, 3000);


// transition end event
// when the transition ends
$('#bannerImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
	// append this to end of #bannerImg
	$('#bannerImg').append(this);
	// remove img-moved-left class
	$(this).removeClass('img-moved-left');
});


