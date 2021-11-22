$('.header__menu').click(function() {
    $('.lines').toggleClass("active")
})
$('.modal-backdrop').click(function() {
    $('.lines').removeClass('active')
})
$('#exampleModal').click(function() {
    $('.lines').removeClass('active')
})
$('.modal-first-step').click(function() {
    $('.modal-first-step').addClass('active-tab')
    $('.test1').addClass('active')
    $('.modal-second-step').removeClass('active-tab')
    $('.test2').removeClass('active')
})
$('.modal-second-step').click(function() {
    $('.modal-second-step').addClass('active-tab')
    $('.test2').addClass('active')
    $('.modal-first-step').removeClass('active-tab')
    $('.test1').removeClass('active')
})
$('.modal-second-step').click(function() {
    $('.modal-body').removeClass('top')
})
$('.modal-first-step').click(function() {
    $('.modal-body').addClass('top')
})


$('.learning-order-select').click(function() {
    $('.learning-order-select').addClass('active')
    $('.learning-order-select').addClass('active-btn')
    $('.first-part-of-modal').addClass('active')
    $('.teachers-order-select').removeClass('active')
    $('.teachers-order-select').removeClass('active-btn')
    $('.second-part-of-modal').removeClass('active')
})
$('.teachers-order-select').click(function() {
    $('.teachers-order-select').addClass('active active-btn')
    $('.teachers-order-select').addClass('active-btn')
    $('.second-part-of-modal').addClass('active')
    $('.learning-order-select').removeClass('active')
    $('.learning-order-select').removeClass('active-btn')
    $('.first-part-of-modal').removeClass('active')
})