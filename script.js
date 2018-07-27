$(document).ready(function () {
    var first_name = $(".fname");
    var last_name = $(".lname");
    var emsg_first_name = $(".emsg1");
    var hidden_first_name = 'hidden1';
    var emsg_last_name = $(".emsg1");
    var hidden_last_name = 'hidden2';
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();

    validateName(first_name, emsg_first_name, hidden_first_name);
    validateName(last_name, emsg_last_name, hidden_last_name);

    $("#cpassword").keyup(checkPasswordMatch);

});

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#cpassword").val();

    if (password != confirmPassword)
        $("#message").html("Passwords do not match!").css('color','red');
    else
        $("#message").html("Passwords match.").css('color','green'  );
}


function validateName(nameid, emsg, hidden) {
    var $regexname = /^([a-zA-Z]{3,16})$/;

    nameid.on('keypress keydown keyup', function () {

        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            emsg.removeClass(hidden);
            emsg.show();
            $('.error').remove();
            nameid.after('<span class="error">Please Enter a Valid Name</span>');

        } else {
            // else, do not display message
            $('.error').remove();
            emsg.addClass('hidden');
        }
    });
}