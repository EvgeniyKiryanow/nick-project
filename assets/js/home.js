$(document).ready(function() {
    if ($(window).width() > 376) {
        $('.home__body-slider').addClass("slick");
        $('.slick').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
        });
    } else {
        $('.slick').slick('unslick')
        $('.home__body-slider').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 376) {
            $('.home__body-slider').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                mobileFirst: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.home__body-slider').removeClass("slick");
        }
    });
});