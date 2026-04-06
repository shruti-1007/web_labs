function seterror(id, msg) {
   let element = document.getElementById(id)
element.getElementsByClassName("error")[0].innerHTML = msg
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let err of errors) {
        err.innerHTML = "";
    }
}

function formValidate() {
    clearErrors(); // clear previous errors
    let returnval = true;

    let name = document.forms["myform"]["fname"].value;
    let email = document.forms["myform"]["femail"].value;
    let password = document.forms["myform"]["fpass"].value;
    let cpassword = document.forms["myform"]["fcpass"].value;

    // Name validation
    if (name.length == 0) {
        seterror("name", "Name is required");
        returnval = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.length == 0) {
        seterror("email", "Email is required");
        returnval = false;
    } else if (!email.match(emailPattern)) {
        seterror("email", "Enter a valid email");
        returnval = false;
    }

    // Password validation
    if (password.length < 6) {
        seterror("pass", "Password must be at least 6 characters");
        returnval = false;
    }

    // Confirm password validation
    if (password != cpassword) {
        seterror("cpass", "Password and confirm password do not match");
        returnval = false;
    }

    return returnval;
}