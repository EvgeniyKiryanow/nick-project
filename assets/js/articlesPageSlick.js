  $(document).ready(function() {
      if ($(window).width() < 376) {
          $('.articles__body').addClass("slick");
          // Boxes
          $('.slick').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              mobileFirst: true,
          });
      } else {
          $('.slick').slick('unslick')
          $('.articles__body').removeClass("slick");
      }
      $(window).resize(function() {
          if ($(window).width() < 376) {
              $('.articles__body').addClass("slick");
              $('.slick').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  mobileFirst: true,
              });
          } else {
              $('.slick').slick('unslick')
              $('.articles__body').removeClass("slick");
          }
      });
  });

  (function($) {
      $(function() {
          $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
              $(this).addClass('active').siblings().removeClass('active')
                  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
          })

      })
  })(jQuery)