<?php
$host = 'localhost';
$user = 'root';
$pass = 'www2017';
$dbName = 'sad';
// 跟MyMSQL連線並登入
$db = mysqli_connect($host, $user, $pass, $dbName) or die('Error with MySQL connection');
// 選擇編碼
mysqli_query($db,"SET NAMES utf8");
?>