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

//for mobile size when .info class is now only 380px high
function handler130() {
	if ($(window).scrollTop() >= 130) {
		console.log("you scrolled greater than 130 pixels from the top." );
		$('#taste .left-blurb').css('display', 'block');
		clearInterval(bannerImgTimer);
		tasteImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#taste .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler130);


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

//for mobile size when .info class is now only 380px high
function handler530() {
	if ($(window).scrollTop() >= 530) {
		console.log("you scrolled greater than 530 pixels from the top." );
		$('#sights .right-blurb').css('display', 'block');
		clearInterval(tasteImgTimer);
		sightsImgTimer = setInterval(function() {
		    // Add .img-moved-right to first image
		    $('#sights .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler530);


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

//for mobile size when .info class is now only 380px high
function handler930() {
	if ($(window).scrollTop() >= 930) {
		console.log("you scrolled greater than 930 pixels from the top." );
		$('#sounds .left-blurb').css('display', 'block');
		clearInterval(sightsImgTimer);
		soundsImgTimer = setInterval(function() {
		    // Add .img-moved-left to first image
		    $('#sounds .infoImg div:first-of-type').addClass('img-moved-left');
		}, 5000);
		// $(window).off('scroll');
	}
}
$(window).on('scroll', handler930);

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


  	//banner images
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

  	//info images
  	$('#tasteImg1').removeClass('tasteImg1');
  	$('#tasteImg1').addClass('tasteImg1mobile');

  	$('#tasteImg2').removeClass('tasteImg2');
  	$('#tasteImg2').addClass('tasteImg2mobile');

  	$('#tasteImg3').removeClass('tasteImg3');
  	$('#tasteImg3').addClass('tasteImg3mobile');

  	$('#tasteImg4').removeClass('tasteImg4');
  	$('#tasteImg4').addClass('tasteImg4mobile');

  	$('#tasteImg5').removeClass('tasteImg5');
  	$('#tasteImg5').addClass('tasteImg5mobile');


  	$('#sightsImg1').removeClass('sightsImg1');
  	$('#sightsImg1').addClass('sightsImg1mobile');

  	$('#sightsImg2').removeClass('sightsImg2');
  	$('#sightsImg2').addClass('sightsImg2mobile');

  	$('#sightsImg3').removeClass('sightsImg3');
  	$('#sightsImg3').addClass('sightsImg3mobile');

  	$('#sightsImg4').removeClass('sightsImg4');
  	$('#sightsImg4').addClass('sightsImg4mobile');

  	$('#sightsImg5').removeClass('sightsImg5');
  	$('#sightsImg5').addClass('sightsImg5mobile');


  	$('#soundsImg1').removeClass('soundsImg1');
  	$('#soundsImg1').addClass('soundsImg1mobile');

  	$('#soundsImg2').removeClass('soundsImg2');
  	$('#soundsImg2').addClass('soundsImg2mobile');

  	$('#soundsImg3').removeClass('soundsImg3');
  	$('#soundsImg3').addClass('soundsImg3mobile');

  	$('#soundsImg4').removeClass('soundsImg4');
  	$('#soundsImg4').addClass('soundsImg4mobile');

  	$('#soundsImg5').removeClass('soundsImg5');
  	$('#soundsImg5').addClass('soundsImg5mobile');


  }
});