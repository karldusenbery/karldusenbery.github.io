// When you click on .hamburger
$('.hamburger').on('click', function () {
	// Slide toggle the menu
	$('#menu').toggleClass('open');
	console.log('You clicked the hamburger');
});

// Every 3 seconds display a new random image in the .banner
setInterval(function() {
	// Add .img-moved-left to first image (look up first-of-type)
	// $('#bannerImg div:first-of-type').addClass('img-moved-left');
	$('.infoImg div:first-of-type').addClass('img-moved-left');

}, 3000);


// transition end events
// when transitions end:
// $('#bannerImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
// 	// append this to end of #bannerImg
// 	$('#bannerImg').append(this);
// 	// remove img-moved-left class
// 	$(this).removeClass('img-moved-left');
// });
$('.infoImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
	// append this to end of .infoImg
	$(this).closest('.infoImg').append(this);
	// remove img-moved-left class
	$(this).removeClass('img-moved-left');
});

/** Document Ready Functions **/
/********************************************************************/

$( document ).ready(function() {

    // Resize video
    scaleVideoContainer();

    initBannerVideoSize('.banner video');
        
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.banner video');
    });

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';

    $('.banner').css('height',unitHeight);
}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(window).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    
    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

    });
}
