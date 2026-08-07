// ==============================
// MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");
        menuBtn.classList.toggle("active");

        // Change icon
        if (menuBtn.classList.contains("active")) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

    });

}
// ==============================
// PAGE SWITCH
// ==============================

const pages=document.querySelectorAll(".page");
const menuItems=document.querySelectorAll(".sidebar ul li");

function showPage(pageId){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    const activePage=document.getElementById(pageId);

    if(activePage){

        activePage.classList.add("active");

    }

    menuItems.forEach(item=>{

        item.classList.remove("active");

    });

    const activeMenu=document.querySelector(`[onclick="showPage('${pageId}')"]`);

    if(activeMenu){

        activeMenu.classList.add("active");

    }

    if(window.innerWidth<=992){

        sidebar.classList.remove("active");

    }

}

// ==============================
// DEFAULT PAGE
// ==============================

window.addEventListener("load",()=>{

    showPage("dashboard");

});

// ==============================
// SEARCH
// ==============================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll("h1,h2,h3,p").forEach(item=>{

if(item.innerText.toLowerCase().includes(value)){

item.style.color="#00e5ff";

}else{

item.style.color="";

}

});

});

}

// ==============================
// CARD HOVER EFFECT
// ==============================

document.querySelectorAll(".card,.order-card,.wishlist-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ==============================
// BUTTON RIPPLE
// ==============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.left=e.offsetX-size/2+"px";
ripple.style.top=e.offsetY-size/2+"px";
ripple.style.pointerEvents="none";
ripple.style.animation="ripple .6s linear";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==============================
// LOGOUT
// ==============================

function logout(){

let result=confirm("Do you want to logout?");

if(result){

alert("Logout Successful!");

window.location.href="login.html";

}

}

// ==============================
// NOTIFICATION POPUP
// ==============================

setTimeout(()=>{

const note=document.createElement("div");

note.innerHTML="🎉 Welcome Back Mahesh!";

note.style.position="fixed";
note.style.right="20px";
note.style.top="20px";
note.style.padding="15px 25px";
note.style.background="linear-gradient(45deg,#00c6ff,#7b2ff7)";
note.style.color="#fff";
note.style.borderRadius="12px";
note.style.zIndex="9999";
note.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";
note.style.animation="slideDown .6s ease";

document.body.appendChild(note);

setTimeout(()=>{

note.remove();

},4000);

},1000);

// ==============================
// COUNTER ANIMATION
// ==============================

document.querySelectorAll(".card h2").forEach(counter=>{

let target=parseInt(counter.innerText.replace(/[^0-9]/g,""));

if(isNaN(target)) return;

let count=0;

let speed=target/80;

let update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});

// ==============================
// SCROLL ANIMATION
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.order-card,.wishlist-card,.notification-card,.settings-box").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".7s";

observer.observe(el);

});
const email = localStorage.getItem("userEmail");

if(email){

    document.getElementById("userEmail").innerHTML = email;

}
// ==============================
// CSS ANIMATION
// ==============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

0%{

transform:scale(0);
opacity:1;

}

100%{

transform:scale(4);
opacity:0;

}

}

@keyframes slideDown{

from{

opacity:0;
transform:translateY(-40px);

}

to{

opacity:1;
transform:translateY(0);

}

}

`;

document.head.appendChild(style);