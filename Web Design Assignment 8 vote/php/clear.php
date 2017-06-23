<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    $fp = fopen("../result.txt","r");
        if(!$fp){
            echo "檔案無法開啟";
            exit;
        }else{
            // 抓出現有資料
            $str = "";
            while((!feof($fp))){
                // 拿掉右側換行和多餘空白
                $tmp = chop(fgets($fp));
                list($option[], $num[]) = explode(", ",$tmp);
            }
            fclose($fp);
            // 全部歸0後寫回檔案
            $fp = fopen("../result.txt","w");
            for($i = 0; $i < count($option); $i++){
                $num[$i] = 0;
                $str .= "$option[$i], $num[$i]\n";
            }
            fputs($fp, chop($str));
            fclose($fp);
            header("Location:  show.php");
    }
?>
</body>
</html>