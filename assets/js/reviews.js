// $(function (){
// 	var reviewLength = $('.reviews-page-wr .reviews-item-wr .reviews-item').length;
// 	if(reviewLength <= 12){
// 		$('.reviews-page-wr .reviews-more').hide();
// 	}

// 	$('.reviews-page-wr .reviews-more').on('click', function () {
// 		$('.reviews-page-wr .reviews-item-wr .reviews-item:nth-child(n+13)').slideToggle();
// 		$(this).hide();
// 	});

// 	resizeController(600, function() {
// 		$('.reviews-page-wr .reviews-item-wr').slick({
// 			arrows: true,
// 			dots: true,
// 			infinite: true,
// 			speed: 800,
// 			rows: 2,
// 			autoplay: false,
// 			draggable: true,
// 			prevArrow: $(".slider-prev"),
// 	        nextArrow: $(".slider-next"),
// 	        appendDots: $(".reviews-slider__nav-wrap"),
// 			slidesToShow: 1
// 		});
// 		$('.navs-wr')
// 	}, function(){
// 		$('.reviews-page-wr .reviews-item-wr.slick-initialized').slick('unslick');
// 	});
// });

$(document).ready(function() {
    if ($(window).width() < 600) {
        $('.reviews-item-wr').addClass("slick");
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            mobileFirst: true,
        });
    } else {
        $('.slick').slick('unslick')
        $('.reviews-item-wr').removeClass("slick");
    }
    $(window).resize(function() {
        if ($(window).width() < 600) {
            $('.reviews-item-wr').addClass("slick");
            $('.slick').slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                mobileFirst: true,
            });
        } else {
            $('.slick').slick('unslick')
            $('.reviews-item-wr').removeClass("slick");
        }
    });
});

// $(document).ready(function() {
//     $('.reviews-item-wr').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }]
//     });
// });