<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>

<p>my guest book !! </p>
<hr />
<table width="200" border="1">
  <tr>
    <td>comment</td>
    <td>name</td>
  </tr>
<?php
require("dbconfig.php");

// $id = (int)$_GET['id'];
$id = (int)base64_decode($_GET['id']);

if ($id <= 0) {
	echo "empty ID";
	exit(0);
}

$sql = "select * from guestbook where id=?;";
$stmt = mysqli_prepare($db, $sql );
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($rs = mysqli_fetch_array($result)) {
    echo "標題: ", $rs['title'], " 作者: ", $rs['name'], "<hr>";
?>

<form method="post" action="05.insertCom.php">
  <tr>
    <td><label>
      <input type="hidden" name="id" value="<?php echo $rs['id']; ?>" />
      <input name="com" type="text" />
    </label></td>
    <td><label>
      <input name="myname" type="text" id="myname"/>
    </label></td>
  </tr>
</table>
<input type="submit" name="Submit" value="送出" />
</form>

<?php
} else echo "cannot find the message to edit.";
?>

<a href="02.list.php">回首頁</a>
</body>
</html>
