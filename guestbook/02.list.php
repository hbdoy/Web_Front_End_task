<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>

<p>my guest book !! </p>
<hr />
<table width="400" border="1">
  <tr>
    <td># of Comt</td>
    <td>id</td>
    <td>name</td>
    <td>title</td>
    <td>message</td>
    <td>action</td>
  </tr>
<?php
require("dbconfig.php");

// 新增顯示評論則數以前
// $sql = "select * from guestbook order by id desc;";

// 顯示評論則數
$sql = "select guestbook.*,count(*) as c from guestbook left join comment on guestbook.id=comment.id group by guestbook.id order by guestbook.id desc;";
$stmt = mysqli_prepare($db, $sql);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

while (	$rs = mysqli_fetch_assoc($result)) {
  $tmp = base64_encode($rs['id']);
	echo "<tr><td>", $rs['c'],
	"</td><td>", $rs['id'],
	"</td><td>", $rs['name'],
	"</td><td>", $rs['title'],
	"</td><td>", $rs['msg'],
  "</td><td>", "<a href='03.delete.php?id={$tmp}'>刪 </a>",
  "<a href='04.editform.php?id={$tmp}'>改 </a>",
  "<a href='05.comform.php?id={$tmp}'>評 </a>",
  "<a href='05.showCom.php?id={$tmp}&msg={$rs['msg']}&title={$rs['title']}&name={$rs['name']}'>讀</a>",
  "</td></tr>";
}
?>
</table>
<a href="01.addform.php">新增留言</a>
</body>
</html>
