<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>

<p>delete message</p>
<hr />
<?php
require("dbconfig.php");

$id = (int)base64_decode($_GET['id']);

if ($id > 0) {
	// 刪除文章
	$sql1 = "delete from guestbook where id = ?;";
	$stmt = mysqli_prepare($db, $sql1);
	mysqli_stmt_bind_param($stmt, "i", $id);
	mysqli_stmt_execute($stmt);
	// 刪除評論
	$sql2 = "delete from comment where id = ?;";
	$stmt = mysqli_prepare($db, $sql2);
	mysqli_stmt_bind_param($stmt, "i", $id);
	mysqli_stmt_execute($stmt);
	echo "message deleted.";
} else {
	echo "empty id, cannot delete.";
}
?>
<br>
<a href="02.list.php">回首頁</a>
</body>
</html>
