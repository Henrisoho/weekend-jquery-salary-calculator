$(document).ready(readyNow);

function readyNow() {
    $('body').on('click', '.Delete', deleteEmployee);
}

function deleteEmployee(){
    console.log('hey')
    $(this).parent().parent().remove()
}