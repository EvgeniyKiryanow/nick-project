$('.header__menu').click(function() {
    $('.lines').toggleClass("active")
})
$('.modal-backdrop').click(function() {
    $('.lines').removeClass('active')
})
$('#exampleModal').click(function() {
        $('.lines').removeClass('active')
    })
    (function($) {
        $(function() {
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this).addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            })
        })
    })(jQuery)