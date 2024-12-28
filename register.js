var accounts = [];

function addAccount() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_pass = document.getElementById('confirm_pass').value;

    // for unique id
    let date = new Date();
    var id = date.getTime() / 1000

    const account = {
        "id": id,
        "email": email,
        "username": username,
        "password": password,
        "confirm_password": confirm_pass
    };

    accounts.push(account);

    localStorage.setItem('accounts', JSON.stringify(accounts));
    console.log("local Storage", JSON.parse(localStorage.getItem('accounts')));
}

function validateForm() {
    clearErrors();

    let isValid = true;

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPass = document.getElementById("confirm_pass").value.trim();

    // Email validation
    const emailError = document.getElementById("emailError");
    const validDomains = ["@gmail.com", "@firstasia.edu.ph"];
    if (!email || !validDomains.some(domain => email.endsWith(domain))) {
        emailError.classList.add("show");
        isValid = false;
    }

    // Username validation
    const usernameError = document.getElementById("usernameError");
    if (username.length < 3) {
        usernameError.classList.add("show");
        isValid = false;
    }

    // Password validation
    const passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.classList.add("show");
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassError = document.getElementById("confirmPassError");
    if (confirmPass !== password) {
        confirmPassError.classList.add("show");;
        isValid = false;
    }

    if(isValid) {
        addAccount();
    };
}

function clearErrors() {
    document.getElementById("emailError").classList.remove("show");
    document.getElementById("usernameError").classList.remove("show");
    document.getElementById("passwordError").classList.remove("show");
    document.getElementById("confirmPassError").classList.remove("show");
}


