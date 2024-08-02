let burger = document.getElementById("burger-checkbox"); 
let img_logo = document.getElementById("img_logo");
let nav = document.getElementById("nav");

burger.addEventListener("click", function(event) {
    event.preventDefault();
    
    nav.classList.toggle("navigation-mobile");
    nav.classList.toggle("navigation");
});