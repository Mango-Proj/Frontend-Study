$('#btn').on('click', isEmpty);
        
function isEmpty(){
    let id = $('#id');
    let pw = $('#pw');

    if ($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning')
        },1500);
    }
    else if ($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning')
        },1500);
    }
}