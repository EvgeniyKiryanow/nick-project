$('.header__menu').click(function () {
    $('.lines').toggleClass("active")
})
$('.modal-backdrop').click(function(){
    $('.lines').removeClass('active')
})
$('#exampleModal').click(function(){
    $('.lines').removeClass('active')
})