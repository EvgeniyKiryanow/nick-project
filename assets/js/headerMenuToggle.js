$('.header__menu').click(function() {
    $('.lines').toggleClass("active")
})
$('.modal-backdrop').click(function() {
    $('.lines').removeClass('active')
})
$('#exampleModal').click(function() {
    $('.lines').removeClass('active')
})
$('.modal-first-step').click(function(){
    $('.modal-first-step').addClass('active')
    $('.test1').addClass('active')
    $('.modal-second-step').removeClass('active')
    $('.test2').removeClass('active')
})
$('.modal-second-step').click(function(){
    $('.modal-second-step').addClass('active')
    $('.test2').addClass('active')
    $('.modal-first-step').removeClass('active')
    $('.test1').removeClass('active')
})

