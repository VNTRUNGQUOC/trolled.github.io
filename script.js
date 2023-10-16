// Validate the login form before submitting it.
function validateLoginForm() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }

    if (password.value === "") {
        alert("Please enter your password.");
        password.focus();
        return false;
    }

    return true;
}

// Add an event listener to the login form so that it validates before submitting.
document.getElementById("loginForm").addEventListener("submit", validateLoginForm);
