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

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-question span");

        // Initially hide all answers
        answer.style.display = "none";
        icon.textContent = "+";

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.display = "none";
                faq.querySelector(".faq-question span").textContent = "+";
            });

            // Open clicked item
            if (!isActive) {
                item.classList.add("active");
                answer.style.display = "block";
                icon.textContent = "−";
            }

        });

    });

});