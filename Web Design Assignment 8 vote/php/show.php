<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>投票</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<?php
    header("Refresh: 5");
    if (!$fp = fopen("../result.txt","r")){
            echo "檔案無法開啟";
            exit;
    }else{
        while((!feof($fp))){
            // 拿掉右側換行和多餘空白
            $tmp = chop(fgets($fp));
            list($option, $num) = explode(", ",$tmp);
            $result[$option] = $num;
        }
        // 保留key,由高至低排序
        arsort($result);
        // print_r($result);
        echo "<div class='showResult'>";
        foreach($result as $key => $value){
            echo "<span class='key'>$key</span> 得票數: $value<br>";
        }
        echo "<hr><a href='../vote.php'>回首頁</a><br>",
        "<button onclick=\"",
        "if(confirm('刪除不可逆，就像人生一樣，還是要繼續嗎?')){window.location.href = 'clear.php';}\">",
        "清空結果</button>",
        "</div>";
        fclose($fp);
    }
?>
</body>
</html>