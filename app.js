  $(document).ready(function () {
    if ($(window).width() < 376 ) {
        $('.articles__body').addClass("slick");
        // Boxes
        $('.slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });
    } else {
        $('.articles__body').removeClass("slick");
    }
    $(window).resize(function () {
        if ($(window).width() < 376 ) {
            $('.articles__body').addClass("slick");
            $('.slick').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            });
        } else {
            $('.articles__body').removeClass("slick");
        }
    });
});
