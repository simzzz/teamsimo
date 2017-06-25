$(document).ready(function() {
    $('#meme-button').click(function() {
        window.location.href = '/gallery';
    });

    const isshow = localStorage.getItem('isshow');
    if (isshow === null) {
        localStorage.setItem('isshow', 1);

        // Show popup here
        $('.modal-box').css({ 'display': 'block' });
    } else {
        $('.modal-box').css({ 'display': 'none' });
        $('.modal-sandbox').css({ 'display': 'none' });        
    }

    $('.close-modal, .modal-sandbox').click(function() {
        $('.modal-box').css({ 'display': 'none' });
        $('.modal-sandbox').css({ 'display': 'none' });
    });
});
