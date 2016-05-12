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
if ($(window).width() < 358 ) {
	console.log("window is less than 347 pixels wide.")
	$('footer i').removeClass('fa-3x');
	$('footer i').addClass('fa-2x');
}
$(window).on ('resize' , function() {
	if ($(window).width() < 358 ) {
		console.log("window is less than 347 pixels wide.")
		$('footer i').removeClass('fa-3x');
		$('footer i').addClass('fa-2x');
	}
	else {
		$('footer i').removeClass('fa-2x');
		$('footer i').addClass('fa-3x');
	}
});


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
		console.log("you scrolled " + $(window).scrollTop() + " pixels from the top." );
		bannerImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#bannerImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
	}
});

function handler475() {
	if ($(window).scrollTop() >= 475) {
		console.log("you scrolled greater than 475 pixels from the top." );
		$('#taste .left-blurb').css('display', 'block');
		clearInterval(bannerImgTimer);
		tasteImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#taste .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler475);

function handler1150() {
	if ($(window).scrollTop() >= 1150) {
		console.log("you scrolled greater than 1150 pixels from the top." );
		$('#sights .right-blurb').css('display', 'block');
		clearInterval(tasteImgTimer);
		sightsImgTimer = setInterval(function() {
		    // Add .img-moved-right to first image
		    $('#sights .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler1150);


function handler1900() {
	if ($(window).scrollTop() >= 1900) {
		console.log("you scrolled greater than 1900 pixels from the top." );
		$('#sounds .left-blurb').css('display', 'block');
		clearInterval(sightsImgTimer);
		soundsImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#sounds .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler1900);

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

//responsive image resizing for mobile
//to make them load faster on cellular data, I made the images smaller.
$(function() {
  if($(window).width() <= 700) {
  	console.log("The window is leass than 700 pixels wide");

  	$('#img1').removeClass('img1');
  	$('#img1').addClass('img1mobile');

  	$('#img2').removeClass('img2');
  	$('#img2').addClass('img2mobile');

  	$('#img3').removeClass('img3');
  	$('#img3').addClass('img3mobile');

  	$('#img4').removeClass('img4');
  	$('#img4').addClass('img4mobile');

  	$('#img5').removeClass('img5');
  	$('#img5').addClass('img5mobile');
  }
});