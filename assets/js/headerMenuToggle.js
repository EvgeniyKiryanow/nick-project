$('.header__menu').click(function() {
    $('.lines').toggleClass("active")
})
$('.modal-backdrop').click(function() {
    $('.lines').removeClass('active')
})
$('#exampleModal').click(function() {
    $('.lines').removeClass('active')
})

// $('.modal-first-step-btn').click(function() {
//     $('.modal-first-step-btn').addClass('active-tab')
//     $('.test1').addClass('active')
//     $('.modal-second-step').removeClass('active-tab')
//     $('.test2').removeClass('active')
// })
$('.modal-second-step').click(function(event) {
    event.preventDefault();
    $('.test2').addClass('active')

    // $('.modal-first-step-btn').removeClass('active-tab')
    $('.test1').removeClass('active')

    // $('.modal-second-step').addClass('active-tab')

})
$('.modal-second-step').click(function(event) {
    $('.modal-body').removeClass('top')
})
$('.modal-first-step-btn').click(function(event) {
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

function limitChars(myObject, max, leftChars) {
    $(myObject).keydown(function() {
        var count = $(this).val().length;
        var num = max - count;

        if (num > 0) {
            $(leftChars).text('Можно ввести символов: ' + num);
            $(this).removeClass('type');
        } else {
            $(leftChars).text('Достигнут лимит символов');
            $(this).addClass('type');
        }
    });
}

$(document).ready(function() {
    var myObject = 'textarea#topic';
    var mySecObject = 'textarea#description'
    var myThirdObject = 'textarea#description.description.teacher'

    var max = 250;
    var descMax = 1000;
    var descTeacherMax = 1000;

    var leftChars = '#leftChars';
    var leftCharsDesc = '#leftCharsDesc';
    var leftCharsDescTeachet = '#leftCharsTeach';

    limitChars(myObject, max, leftChars);
    limitChars(mySecObject, descMax, leftCharsDesc);
    limitChars(myThirdObject, descTeacherMax, leftCharsDescTeachet);
});

$('#staticBackdropBtn').attr('disabled', 'disabled');

$(document).ready(function() {
    $('.field input').keyup(function() {
        var empty = false;

        $('.field input').each(function() {
            if ($(this).val().length == 0) {
                $("#staticBackdropBtn").attr("disabled", false);
                empty = true;
            }
            if ($(".label-check-inp").click(function() {
                    $("#staticBackdropBtn").attr("disabled", false);
                })) {
                empty = true;
            }
        });

        if (empty) {
            $('#staticBackdropBtn').attr('disabled', 'disabled');
        } else {
            $('#staticBackdropBtn').attr('disabled', empty);
        }
    });
});