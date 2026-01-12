let  homeScore = document.getElementById("home-score");

let guestScore = document.getElementById("guest-score")
let home = Number(localStorage.getItem("homeScore")) || 0;
let guest = Number(localStorage.getItem("guestScore")) || 0;

homeScore.textContent = home;
guestScore.textContent = guest;
function plusonehome() {
    home += 1;
    homeScore.textContent = home;
    localStorage.setItem("homeScore", home);
}

function plustwohome() {
    home += 2;
    homeScore.textContent = home;
    localStorage.setItem("homeScore", home);
}

function plusthreehome() {
    home += 3;
    homeScore.textContent = home;
    localStorage.setItem("homeScore", home);
}



function plusoneguest(){
    guest += 1;
 guestScore.innerHTML = guest;
 localStorage.setItem("guestScore", guest);
}

//plustwohome plusthreehome

function plustwoguest(){
    guest += 2;
 guestScore.innerHTML = guest;
 localStorage.setItem("guestScore", guest);

}

function plusthreeguest(){
    guest += 3;
 guestScore.innerHTML = guest;
 localStorage.setItem("guestScore", guest);

}

