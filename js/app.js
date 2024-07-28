let title = document.querySelector(".title_Abelint");
let canvas = document.getElementById("dotsTitle");

canvas.width = canvas.offsetWidth;  // ширина канваса
canvas.heigth = canvas.offsetHeight; // высота канваса

let ctx = canvas.getContext("2d"); // Переменная с канвасом для рисования

let dots = []; // Массив для точек
let arrayColor = ["#CFCCBE", "#E1DFC1", "#A8A8A8", "#D8C5C5", "#F7F3F3"]; // Цвета для точек

// Формируем точки с параметрами

for (let i = 0; i < 50; i++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.heigth),
        size: 3,
        color: arrayColor[Math.floor(Math.random() * 5)]
    })
}

// Функция для отображение точек, с перебором разных параметров массива dots
function drawDots() {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    })
}

drawDots();
// Обрабатываем движение мыши
title.addEventListener("mousemove", function(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.heigth); // Очищаем линии
    drawDots();
    let mouse = {
        x: event.pageX - title.getBoundingClientRect().left,
        y: event.pageY - title.getBoundingClientRect().top
    }

    dots.forEach(dot => {
        let distant = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distant < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

// Обрабатываем мышь в не зоне досигаемости
title.addEventListener("mouseout", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    drawDots();
});