const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("roleError").textContent = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.getElementById("role").value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            document.getElementById("emailError").textContent = "Email is required";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email";
            valid = false;
        }

        if (password === "") {
            document.getElementById("passwordError").textContent = "Password is required";
            valid = false;
        } else if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Minimum 6 characters";
            valid = false;
        }

        if (role === "") {
            document.getElementById("roleError").textContent = "Select a role";
            valid = false;
        }

        if (!valid) return;

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", role);

        if (role === "admin") {
            window.location.href = "Admin.html";
        } else {
            window.location.href = "User.html";
        }
    });
}