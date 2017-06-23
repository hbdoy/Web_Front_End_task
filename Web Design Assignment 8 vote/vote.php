<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>投票</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <form action="php/save.php" method="POST">
        <table>
            <tr>
                <th id="title">選擇另一半最重要的參考點:</th>
            </tr>
            <tr>
                <td><label><input type="radio" name="choosen" value="0" checked>外表</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="choosen" value="1">能力</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="choosen" value="2">個性</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="choosen" value="3">財力</label></td>
            </tr>
            <tr>
                <td><input type="submit" value="投票" id="submit"></td>
            </tr>
            <tr>
                <td id="last"><a href='php/show.php'>看結果</a></td>
            </tr>
        </table>
    </form>
</body>
</html>