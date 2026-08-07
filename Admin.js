const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// PAGE SWITCH
// ===============================

const pages = document.querySelectorAll(".page");
const menuItems = document.querySelectorAll(".sidebar ul li");

function showPage(pageId) {

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");

    // Remove active menu
    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    // Add active menu
    event.currentTarget.classList.add("active");

    // Close sidebar on mobile
    if (window.innerWidth <= 992) {
        sidebar.classList.remove("active");
    }

}


// ===============================
// DEFAULT PAGE
// ===============================

window.onload = function () {

    document.getElementById("dashboard").classList.add("active");

};


// ===============================
// LOGOUT
// ===============================

function logout() {

    let result = confirm("Are you sure you want to logout?");

    if (result) {

        alert("Logout Successful");

        // Redirect Login Page
        window.location.href = "login.html";

    }

}


// ===============================
// CLOSE SIDEBAR ON RESIZE
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        sidebar.classList.remove("active");

    }

});
const email = localStorage.getItem("userEmail");

if(email){

    document.getElementById("adminEmail").innerHTML = email;

}

// ===============================
// OPTIONAL BUTTON ANIMATION
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});
