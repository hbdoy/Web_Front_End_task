var kind = document.getElementById('kind');
var page = document.getElementById('page');
var title = document.getElementById('title');
var titleText = document.getElementById('titleText');
var last = document.getElementById('last');
var test = document.getElementById('test');
var needStop = false;
var myH1 = document.querySelector('#kind h1');
var submit = document.getElementById('submit');
var menu = [];
menu['推薦'] = ["蒜泥白肉", "魚香豬腳", "五更腸旺", "海鮮羹", "宮保雞丁", "鳳梨排骨", "紅燒獅子頭", "富貴蝦球", "鐵板牛柳", "宮保蝦仁", "宮保牛肉", "油條鮮蚵", "糖醋海黃魚", "豆瓣吳郭魚", "三杯杏鮑菇", "炒鱔糊", "香酥肥鴨", "油淋子雞", "山藥燉雞", "砂鍋魚頭", "炸銀絲卷", "棗泥包(6)"];
menu['冷菜'] = ["黃瓜拉皮", "涼拌蜇皮", "香酥腰果", "蔥油嫩雞", "醉雞", "椒麻雞丁", "五福大拚", "三陽開泰", "富貴拼盤"];
menu['青蔬豆腐'] = ["炒芥蘭", "豆苗", "乾煸四季豆", "魚香茄子", "開陽白菜", "麻婆豆腐", "螞蟻上樹", "鐵板豆腐", "菠菜", "菜圃蛋", "　", "高麗菜", "魚香烘蛋", "家常豆腐", "青蔥烘蛋", "苦瓜鹹蛋", "素杏鮑菇", "素什錦豆腐", "清炒絲瓜", "炒蘆筍", "紹子豆腐", "紹子粉絲", "醬燒茄子", "番茄蛋豆腐", "冬菇豆腐", "白油烘蛋", "紅燒豆腐", "柴魚豆腐"];
menu['豬牛肉類'] = ["回鍋肉", "醬爆肉", "蒼蠅頭", "魚香肉絲", "京醬肉絲", "豆干肉絲", "梅干扣肉", "　", "軟炸肥腸", "蒜苗臘肉", "蔥爆牛肉絲", "青椒牛肉絲", "紅椒牛肉絲", "豆干牛肉絲", "紅燒豬腳", "香根牛肉絲", "韭黃牛肉絲", "芥蘭牛肉絲", "薑絲牛肉絲", "蔥爆豬肉絲", "宮保豬肉絲", "芹菜牛肉", "乾煸牛肉絲"];
menu['魚'] = ["清蒸鱈魚", "豆酥鱈魚", "清蒸鱸魚", "豆瓣鱸魚", "紅燒黃魚", "乾煎黃魚", "魚加豆腐", "魚改乾煎", "豆瓣黃魚", "紅燒吳郭魚", "樹子蒸石斑", "糖醋吳郭魚", "乾煎白鯧"];
menu['雞'] = ["宮保雞丁", "蔥油嫩雞", "辣子雞丁", "三杯雞(半)", "腰果雞丁", "醬爆雞丁"];
menu['海鮮'] = ["腰果蝦仁", "蝦仁爆蛋", "鹽酥大蝦", "炒三鮮", "宮保花枝", "蒜香鹹小卷", "絲瓜蛤蠣", "乾燒蝦仁", "清炒蝦仁", "豆苗蝦仁", "蝦仁烘蛋", "宮保魷魚", "火爆魷魚", "豆鼓鮮蚵", "塔香蛤蠣", "蘆筍蝦仁", "宮保蟹腿", "海參蹄筋"];
menu['湯'] = ["酸菜肚片湯", "冬瓜蛤蠣湯", "酸辣湯", "白菜砂鍋", "山藥燉雞湯", "砂鍋魚頭", "玉米湯", "渝陽豆腐", "　", "連鍋湯", "　", "佛跳牆"];
menu['飯小菜自酒'] = ["白飯", "特製小菜", "天仁香片", "　", "煉乳", "　", "　", "　", "0 熱", "0 小", "0 飯", "半飯", "酒自", "筒冰", "酒自 6折", "酒自 優待", "筒冰免費", "酒自免瓶費"];
menu['炒飯麵線'] = ["麻油麵線", "蝦仁蛋炒飯", "肉絲蛋炒飯"];
menu['飲料啤酒'] = ["金牌啤酒", "海尼根", "麒麟Bar", "　", "統一礦泉水", "蘋果西打", "可口可樂", "開喜烏龍茶", "無糖茶裏王", "美粒果柳橙", "蔓越莓果汁", "芭樂汁", "麥茶", "普通紹興", "陳年紹興", "精釀紹興", "　", "38高粱小", "58高粱小", "38高粱大", "58高粱大", "黑牌威士忌", "綠牌威士忌", "蘇格威士忌", "葡萄紅酒", "中秋紀念酒", "手寫輸入", "58高粱中", "特級高梁"];
menu['酒類檸檬'] = ["檸檬", "薑絲蒜頭", "話梅", "　", "　", "外食", "砂糖/冰糖", "香菜"];
menu['素食加工費'] = ["素食5百", "素食4百", "素食3百", "來料代工"];
menu['水果'] = ["水果10", "水果15", "水果20", "水果25", "水果30", "水果szn", "水果1人"];
menu['手寫項目'] = ["　", "特製菜", "特別服務費", "換菜補差價", "客製合菜", "外帶預加", "魚香醬汁", "糖醋醬汁", "豆瓣醬汁"];
menu['訂金'] = ["訂金預收", "訂金折扣"];
menu['Temp'] = ["三洋開泰", "賜福拼盤", "漁翁得利", "紹興大蝦", "香酥肥鴨", "手工棗泥包"];
menu['合菜/套餐'] = ["合菜4千", "合菜5千", "合菜6千", "合菜9千", "換菜補差價", "客製合菜", "合菜加一位", "新年闔家餐"];
menu['加料 砂鍋'] = ["小肉丸", "油豆腐", "粉皮", "豆皮", "凍豆腐", "大白菜", "單獨魚頭", "鴨血", "魚香醬汁", "糖醋醬汁", "豆瓣醬汁"];
var examDish = ["推薦", "推薦", "冷菜", "青蔬豆腐", "豬牛肉類", "魚", "雞", "海鮮", "湯", "炒飯麵線"];

// 語音API
var tts = new TTS();

// 顯示所選類別中所有菜色
function showResult(e){
    if(e.target.nodeName == "BUTTON"){
        // console.log(title.offsetHeight);
        // title.style.width = page.offsetWidth + "px";
        var index = e.target.textContent;
        kind.style.display = "none";
        test.style.display = "none";
        title.style.display = "block";
        if(index == "使用說明" ){
            page.innerHTML =
            `
            <div class="col-md-12">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">使用說明</h3>
                    </div>
                    <div class="panel-body">
                        <p>
                        1. 此網頁為幫助不熟悉餐點在點餐系統中的分類位置之使用者。
                        <br>
                        2. 使用上可以隨意點選每個類別中的餐點，熟悉操作與記憶餐點位置。
                        <br>
                        3. <b>小測驗</b>點選後會隨機出現一道熱門菜色，作答方式為找到菜色點選即可。
                        <br>
                        4. 題目旁邊的喇叭按鈕可以念出菜色名，首次點擊因為要產生音檔會比較慢。(手機版可能不支援)
                        <br>
                        Enjoy It~
                        </p>
                    </div>
                </div>
            </div>
            `;
            return;
        }else if(index == "版權聲明"){
            page.innerHTML =
            `
            <div class="col-md-12">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">版權聲明</h3>
                    </div>
                    <div class="panel-body">
                        <p>
                        未經本人許可不得擅自更改內容或用於商業用途
                        <br>
                        如有侵權或是任何問題請與我聯絡
                        <br>
                        LeeRay: felicity860128@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            `;
            return;
        }
        titleText.textContent = index;
        var str = "";
        for(var i = 0; i < menu[index].length; i++){
            str +=
            `
            <div class="col-xs-4">
                <button type="button" class="btn btn-block btn-default">${menu[index][i]}</button>
            </div>
            `;
        }
        page.innerHTML = str;
    }
}
kind.addEventListener('click', showResult);

// 根據點選的菜色變更標題,並判斷是否在測驗
function clickDish(e){
    if(e.target.nodeName == "BUTTON"){
        var dishName = e.target.textContent;
        if(!needStop){
            titleText.textContent = dishName;
        }else{
            if(myH1.textContent == dishName){
                titleText.innerHTML =
                `<p class="bg-success text-center">對了! 1秒後換新題目</p>`;
                showExam();
                setTimeout("lastPage()", 1500);
            }else{
                titleText.innerHTML =
                `<p class="bg-danger text-center">錯了!</p>`;
            }
        }
    }
}
page.addEventListener('click', clickDish);

// 返回選取類別頁
function lastPage(){
    // 回首頁前清空當前菜單
    titleText.textContent = "";
    page.innerHTML = "";
    title.style.display = "none";
    kind.style.display = "block";
    test.style.display = "block";
}
last.addEventListener('click', lastPage);

// 變換測驗按鈕
function myTest(){
    if(!needStop){
        needStop = true;
        this.textContent = "小測驗 結束";
        showExam();
    }else{
        needStop = false;
        this.textContent = "小測驗 開始";
        myH1.textContent = "選擇類別";
    }
}

// 顯示題目
function showExam(){
    // 熱門測驗總共10項,隨機取0~9
    var index = Math.floor(Math.random() * 10);
    // 所選項目中菜色總數
    var len = menu[examDish[index]].length;
    do{
        // 隨機選取一道菜,並防止選到填充的空白
        var tmp = Math.floor(Math.random() * len);
    }while(menu[examDish[index]][tmp] == "　");
    myH1.innerHTML = `<div class='bg-info'>${menu[examDish[index]][tmp]}<span id='media'><img src="http://tts.itri.org.tw//TTScript/images/playing.png" id="tmpVoiceImg"></span></div>`;
    // 產生藍色喇叭
    // tts.PlayerSet.hidden = false;
    tts.ConvertInit("我要一份" + menu[examDish[index]][tmp], "media", "Bruce", "100", "0", "0", "0", "5");
    // console.log(index + " " + tmp);
}
test.addEventListener('click', myTest);

// 優化第一次點擊後面的語音撥放為現有暫存檔,而不是再產生一次
function playVoice(e){
    if(e.target.nodeName == "IMG"){
        // 首次點擊後把原先圖片換成離線的,之後點擊不會再連線產生音檔
        if(e.target.id != "tmpVoiceImg"){
            e.target.width = 0;
            e.target.height = 0;
            document.getElementById("tmpVoiceImg").style.display = "inline-block";
            return;
        }
        // media 中最後的子元素為包著 audio 的 div
        var tmp = document.getElementById("media").lastChild;
        // 此 div 中的第一個子元素就是 audio
        tmp.firstChild.play();
    }
}
myH1.addEventListener('click', playVoice);

function alertQQ(){
    alert("點了也不能送單啊QQ");
}
submit.addEventListener('click', alertQQ);