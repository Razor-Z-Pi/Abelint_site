<?php
require_once "./db/db.php"
?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/style.css">

    <title>АБЕЛИНТ – Центр геоинформационных технологий и 3D моделирования</title>
  </head>

  <body>
    <section class="container">

      <header class="header block">
        <div class="logo" id="img_logo">
          <a href="index.html"><img class="logo_img" src="./image/abelint-fone.png" alt="АБЕЛИНТ"></a>
        </div>

        <nav id="nav" class="navigation">
          <ul>
            <li class="point-navigate"><a class="pulsate" target="_blank" style="font-weight: 700;" href="https://xn--80acmmon9a.xn--p1ai/blog/">Проект AR-гид по историческим местам Хакасии</a></li>
            <li class="point-navigate"><a href="Doc.html">Документы</a></li>
            <li class="point-navigate"><a href="3Dmodel.html">3D модели</a></li>
            <li class="point-navigate"><a href="https://xn--80acmmon9a.xn--p1ai/hackathon2022/hackathon2022.html" target="_blank">Хакатон 2022</a></li>
          </ul>
        </nav>

        <div class="burger_container">
          <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
          <label class="burger" for="burger-checkbox"></label>
        </div>
      </header>

      <footer class="footer block">
        <h2>
          Приглашаем поддержать проект «Сохранения культурно-исторических памятников Минусинской котловины»
        </h2>
        <p>
          с помощью создания приложения с дополненной реальностью AR-гид
        </p>
        <nav class="footer_navigation">
          <ul>
            <li class="logo"><a href=""><img class="logo_img" src="./image/abelint-fone.png" alt=""></a></li>
            <li>© 2019-2024 АНО «АБЕЛИНТ». Все права защищены.</li>
            <li class="point-navigate"><a href="#" id="point_start">В начало</a></li>
          </ul>
        </nav>
      </footer>
    </section>

    <script src="./js/loaded-script-block.js"></script>
    <script src="./js/loader.js"></script>
    <script src="./js/burger.js"></script>
    <script src="./js/scroll-script.js"></script>
  </body>
</html>