
$('.articles__body').slick({
   slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: "unslick"
        },
        {
            breakpoint: 376,
            settings: "unslick"
          },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
