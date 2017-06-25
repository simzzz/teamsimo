$(document).ready(function() {
    $('#sign-out-btn').hide();
    //TODO: Set up button logic if user is signed in or not!
    $('#register-btn').click(function() {
        window.location.href = '/register';
    });
    $('#log-in-btn').click(function() {
        window.location.href = '/login';
    });
});