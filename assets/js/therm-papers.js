$('div.therm-btn-wrapper').click(function() {
    $('.therm-modal-wrapp').removeClass('hide-therm-modal')
    $('.therm-modal-wrapp').addClass('show-therm-modal')
})

$('.close').click(function() {
    $('.therm-modal-wrapp').removeClass('show-therm-modal')
    $('.therm-modal-wrapp').addClass('hide-therm-modal')
})