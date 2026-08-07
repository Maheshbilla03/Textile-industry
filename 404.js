// // // Countdown Redirect

// // let time = 10;

// // const countdown = document.getElementById("time");

// // const timer = setInterval(() => {

// time--;

// countdown.innerHTML = time;

// if(time <= 0){

// clearInterval(timer);

// // Redirect to Home

// window.location.href = "index.html";

// }

// },1000);


// Search Button

const button = document.querySelector(".search-box button");

button.addEventListener("click",()=>{

const value = document.querySelector(".search-box input").value.trim();

if(value===""){

alert("Please enter a search keyword.");

}else{

window.location.href="index.html";

}

});