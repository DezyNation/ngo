const navBar = document.getElementById("navbar");
const menu = document.getElementById("menu");
var navVar = 0;

function toggleMenu(){
    if(navVar%2 == 0){
        navBar.style.height = "35vh";
        menu.style.display = "flex";
        navVar = 1;
    }
    else{
        navBar.style.height = "9.6vh";
        navVar = 0;
        menu.style.display = "none";
    }
}


document.getElementById("hero").addEventListener("click", () =>{
    if(screen.width < 768){
        navBar.style.height = "9.6vh";
        navVar = 0;
        menu.style.display = "none";
    }
})