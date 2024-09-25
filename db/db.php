<?php
try {
    $user = "root";
    $password = "";
    $db = new PDO("mysql:host=localhost;dbname=test", $user, $password);
} catch (PDOException $e) {
    echo("Произошла ошибка " . $e);
}
?>