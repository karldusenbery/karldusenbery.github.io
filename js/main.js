// When you click on .hamburger
$('#menuIcon').on('click', function () {
    // Slide toggle the menu
    $('.hamburger-menu').toggleClass('open');
    console.log("you clicked on the hamburger");
});

$('header img').on('click', function () {
    // Slide toggle the menu
    console.log("you clicked on the header image.");
});

//respnsive social link icons for mobile
if ($(window).width() < 347 ) {
	console.log("window is less than 347 pixels wide.")
	$('footer i').removeClass('fa-3x');
	$('footer i').addClass('fa-2x');
}


var bannerImgTimer;
var tasteImgTimer;
var sightsImgTimer;
var soundsImgTimer;

$( document ).ready(function() {
    console.log( "page ready!" );
    $('.banner-blurb').addClass('slide-banner-blurb-down');
    bannerImgTimer = setInterval(function() {
	    // Add .img-moved-left to first image
	    $('#bannerImg div:first-of-type').addClass('img-moved-left');
	}, 5000);
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= 0) {
		//console.log("you scrolled " + $(window).scrollTop() + " pixels from the top." );
		bannerImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#bannerImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= 320) {
		console.log("you scrolled greater than 320 pixels from the top." );
		$('#taste .left-blurb').css('display', 'block');
		clearInterval(bannerImgTimer);
		tasteImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#taste .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= 995) {
		console.log("you scrolled greater than 995 pixels from the top." );
		$('#sights .right-blurb').css('display', 'block');
		clearInterval(tasteImgTimer);
		sightsImgTimer = setInterval(function() {
		    // Add .img-moved-right to first image
		    $('#sights .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
	}
});

$(window).on('scroll', function () {
	if ($(window).scrollTop() >= 1800) {
		console.log("you scrolled greater than 1800 pixels from the top." );
		$('#sounds .left-blurb').css('display', 'block');
		clearInterval(sightsImgTimer);
		soundsImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#sounds .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
	}
});

$('.infoImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
    // append this to end of .infoImg
    $(this).closest('.infoImg').append(this);
    // remove img-moved-left class
    $(this).removeClass('img-moved-left');
});

$('#bannerImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
    // append this to end of .infoImg
    $(this).closest('#bannerImg').append(this);
    // remove img-moved-left class
    $(this).removeClass('img-moved-left');
});