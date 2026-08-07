const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveal.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("active");

        }

    });

});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});

// Close menu when any nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
        icon.classList.replace("fa-xmark", "fa-bars");

    });

});

// Close menu when window is resized
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});