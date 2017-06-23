<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>

<p>insert new message</p>
<hr />
<?php
require('dbconfig.php');

$title = htmlspecialchars($_POST['title']);
$msg = htmlspecialchars($_POST['msg']);
$name = htmlspecialchars($_POST['myname']);

if ($title) {
	// sql指令,若有變數要傳入,可用?表示
	$sql = "insert into guestbook (title, msg, name) values (?, ?, ?)";
	// prepare sql statement
	$stmt = mysqli_prepare($db, $sql);
	// bind parameters with variables,第二個參數為傳入變數型態,這邊三個變數都是string
	mysqli_stmt_bind_param($stmt, "sss", $title, $msg, $name);
	// 執行SQL
	mysqli_stmt_execute($stmt);
	echo "message added.";
} else {
	echo "empty title, cannot insert.";
}
?>
<br>
<a href="02.list.php">回首頁</a>

</body>
</html>
