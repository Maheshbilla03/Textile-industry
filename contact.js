const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

const fields = ["name","email","subject","message"];

fields.forEach(id=>{

const input=document.getElementById(id);

input.nextElementSibling.innerHTML="";

});

const name=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

if(name.value.trim()==""){

name.nextElementSibling.innerHTML="Please enter your name";
valid=false;

}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email.value)){

email.nextElementSibling.innerHTML="Enter a valid email address";
valid=false;

}

if(subject.value.trim().length<3){

subject.nextElementSibling.innerHTML="Subject must contain at least 3 characters";
valid=false;

}

if(message.value.trim().length<10){

message.nextElementSibling.innerHTML="Message must contain at least 10 characters";
valid=false;

}

if(valid){

alert("Your message has been sent successfully!");

form.reset();

}

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