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


$('.infoImg').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 'div', function () {
    // append this to end of .infoImg
    $(this).closest('.infoImg').append(this);
    // remove img-moved-left class
    $(this).removeClass('img-moved-left');
});