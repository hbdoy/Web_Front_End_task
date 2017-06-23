<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<?php
    $name = $_POST['name'];
    $choose = $_POST['choose'];
    $member = $_POST['member'];
    $member_price = array(0.95, 0.8, 0.7);
    $member_type = array("一般會員", "銀卡會員", "金卡會員");
    $shop = array("珍珠奶茶", "冰淇淋紅茶", "多多綠");
    $price = array(80, 60, 50);
    if($name){
        $total = 0;
        echo "<div class='showResult'>訂購者名稱: $name<br>".
        "會員類型: $member_type[$member]<br>".
        "專屬您的折扣: ".($member_price[$member] * 10)." 折<hr>".
        "您購買了:<br>";
        for($i = 0; $i < count($choose); $i++){
            $tmp = (int)$choose[$i];
            if($tmp > 0){
                echo "$shop[$i]: $tmp 杯 $ ".($price[$i] * $tmp)."<br>";
                $total += $price[$i] * $tmp;
            }else{
                echo "親愛的朋友，你在輸入什麼 $tmp 杯?<br>";
            }
        }
        echo "<hr>總金額: $ $total * $member_price[$member] = $ ".($total * $member_price[$member])."</div>";
    }else{
        echo "<div class='showResult'>請輸入訂購者姓名喔!</div>";
    }
?>
<br>
<a href="../shopping.html" class="mid">重新訂購</a>
</body>
</html>