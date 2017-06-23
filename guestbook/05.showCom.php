<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Comment</title>
</head>
<body>
    <p>my guest book !! </p>
    <hr />
    <?php
    require("dbconfig.php");
    $id = (int)base64_decode($_GET['id']);
    $msg = $_GET['msg'];
    $title = $_GET['title'];
    $name = $_GET['name'];
    $sql = "select * from comment where id=?;";
    $stmt = mysqli_prepare($db, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    echo "標題: $title<br>作者: $name<hr>",
    "內容:<br>$msg<hr>",
    "留言:<br>";
    while (	$rs = mysqli_fetch_assoc($result)) {
        echo "<div>{$rs['author']}: {$rs['content']}</div>";
    }
    echo "<hr>我要評論<br>";
    ?>
    <form method="post" action="05.insertCom.php">
        <tr>
          <td><label>
            <input type="hidden" name="id" value="<?php echo $id; ?>" />
            <input name="com" type="text" />
          </label></td>
          <td><label>
            <input name="myname" type="text" id="myname"/>
          </label></td>
        </tr>
        <input type="submit" name="Submit" value="送出" />
    </form>
    <a href="02.list.php">回首頁</a>
</body>
</html>