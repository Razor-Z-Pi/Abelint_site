let btn = document.getElementById("point_start");
btn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});