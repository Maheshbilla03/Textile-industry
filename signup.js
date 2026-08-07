// Auto Generate Email
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", function () {

    let username = this.value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");

    if (username !== "") {
        emailInput.value = username + "@gmail.com";
    } else {
        emailInput.value = "";
    }

});

// Signup Form
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("small").forEach(item => {
        item.innerHTML = "";
    });

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const role = document.getElementById("role");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    // Name
    if (name.value.trim() === "") {
        document.getElementById("nameError").innerHTML = "Enter your full name";
        valid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    // Phone Validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 10-digit phone number";
        valid = false;
    }

    // Role
    if (role.value === "") {
        document.getElementById("roleError").innerHTML = "Please select a role";
        valid = false;
    }

    // Password
    if (password.value.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    // Confirm Password
    if (password.value !== confirmPassword.value) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    // Terms
    if (!terms.checked) {
        document.getElementById("termsError").innerHTML = "Please accept the Terms & Conditions";
        valid = false;
    }

    if (valid) {

        const user = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            role: role.value,
            password: password.value
        };

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Account Created Successfully!");

        // Redirect to login page
        window.location.href = "login.html";
    }

});