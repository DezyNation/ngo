const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");

let menuvar = 0;

function togglemenu(){
    if(menuvar == 0){
        navbar.style.height = "45vh";
        menu.style.top = "45vh";
    }
    else{
        navbar.style.height = "12vh";
        menu.style.top = "12vh";
    }
    menuvar++;
}

document.getElementById("menu").addEventListener("click", ()=>{
    navbar.style.height = "12vh";
    menu.style.top = "12vh";
    menuvar = 0;
})