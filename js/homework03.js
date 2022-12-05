$('.mainSlide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.play').click(function () {
    $('.mainSlide').slick('slickPlay');
});

$('.stop').click(function () {
    $('.mainSlide').slick('slickPause');
});
