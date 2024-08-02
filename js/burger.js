let burger = document.getElementById("burger-checkbox"); 
let img_logo = document.getElementById("img_logo");
let nav = document.getElementById("nav");
let div = document.querySelector(".box_abelint");
let header = document.querySelector(".header");

// Работа бургера, способом замены классов и добавления
burger.addEventListener("click", function() {
    nav.classList.toggle("navigation-mobile");
    nav.classList.toggle("navigation");
    img_logo.classList.toggle("container_hidden");

    if (div.style.visibility !== "hidden") {
        div.style.visibility = "hidden";
    } else {
        div.style.visibility = "visible";
    }

    if (header.style.height !== "500px") {
        header.style.height = "500px";
    } else {
        header.style.height = "100px";
    }
});