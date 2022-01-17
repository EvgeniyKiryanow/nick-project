// $(document).ready(function() {
//     $("#add-new-theme").click(function() {
//         var getVal = $("#name-of-diplom").val();
//         $(".teachers-work").append("<a class='new-dilpom-theme-input'></a>")
//         $(".new-dilpom-theme-input").append(getVal)
//     });
// });

$('div.thesis-btn-wrapper').click(function() {
    $('.thesis-modal-wrapp').removeClass('hide-thesis-modal')
    $('.thesis-modal-wrapp').addClass('show-thesis-modal')
})

$('.close').click(function() {
    $('.thesis-modal-wrapp').removeClass('show-thesis-modal')
    $('.thesis-modal-wrapp').addClass('hide-thesis-modal')
})