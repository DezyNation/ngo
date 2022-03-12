const navBar = document.getElementById("navbar");
const stroke = document.getElementById("menu-stroke");
var navVar = 0;

function toggleMenu(){
    if(navVar%2 == 0){
        navBar.style.height = "40vh";
        stroke.style.stroke = "#000";
        navVar = 1;
    }
    else{
        navBar.style.height = "10vh";
        stroke.style.stroke = "#FFF";
        navVar = 0;
    }
}


document.getElementById("hero").addEventListener("click", () =>{
    if(screen.width < 768){
        navBar.style.height = "10vh";
        stroke.style.stroke = "#FFF";
        navVar = 0;
    }
})