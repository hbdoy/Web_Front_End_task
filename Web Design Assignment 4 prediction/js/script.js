var userForm = document.getElementById('userForm');

var birthYear = document.getElementById("birthYear");
var birthMonth = document.getElementById("birthMonth");
var birthDay = document.getElementById("birthDay");

var constellation = document.getElementById("constellation");
var animal = document.getElementById("animal");

var landingPage = document.querySelector(".landingPage");

var container_Birth = document.querySelector(".container_Birth");
var container_Constellation = document.querySelector(".container_Constellation");
var container_Animal = document.querySelector(".container_Animal");
var container_submit = document.querySelector(".container_submit");

var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var showSomething = document.querySelector(".showSomething");
var status = -1;
var userForm = document.getElementById('userForm');
var conResult;
var animalResult;

var home = document.querySelector('.home');
var phone_home = document.querySelector('.phone_home');

// 建立年份與月份
function createBirth(){
    var string1 = `<option value="0" selected>選擇年份</option>`;
    var string2 = `<option selected>選擇月份</option>`;
    for(var i = 1917; i <= 2017; i++){
        string1 += `<option value="${i}">${i}</option>`;
    }
    for(var i = 1; i <= 12; i++){
        string2 += `<option value="${i}">${i}</option>`;
    }
    birthYear.innerHTML = string1;
    birthMonth.innerHTML = string2;
    birthDay.innerHTML = `<option value="0" selected>請先選擇月份</option>`;
}
// 依據使用者選擇月份顯示該月天數
function createBirthDay(){
    // console.log(this.value);
    var string = `<option value="0" selected>選擇日期</option>`;
    var j;
    // 2月統一設29天
    if(this.value % 2 != 0){
        j = 31;
        // 9,11月只有30天
        if(this.value >= 9)
            j = 30;
    }else{
        j = 30;
        if(this.value == 2)
            j = 29;
        // 8,10,12月有31天
        if(this.value >= 8)
            j = 31;
    }
    for(var i = 1; i <= j; i++){
        string += `<option value="${i}">${i}</option>`;
    }
    birthDay.innerHTML = string;
}
createBirth();
birthMonth.addEventListener('change', createBirthDay);


// 建立星座選項
function createConstellation(){
    var string = "";
    for(var i = 0; i < 12; i++){
        if(i < 10)
            string += `<div><label><input type="radio" name="con" value=${i}><span class="constellationIcon">&#980${i}</span></input></label></div>`;
        else if(i >= 10)
            string += `<div><label><input type="radio" name="con" value=${i}><span class="constellationIcon">&#98${i}</span></input></label></div>`;
    }
    constellation.innerHTML = string;
}
createConstellation();

// 建立生肖選項
function createAnimal(){
    var animalArr = ["&#128045", "&#128046", "&#128047", "&#128048", "&#128050", "&#128013", "&#128052", "&#128016", "&#128053", "&#128020", "&#128054", "&#128055"];
    var string = "";
    for(var i = 0; i < 12; i++){
        string += `<div><label><input type="radio" name="ani" value=${i}><span class="animalIcon">${animalArr[i]}</span></input></label></div>`;
    }
    animal.innerHTML = string;
}
createAnimal();


// 跳到選擇的頁面
function showChosen(e){
    if(e.target.id == "birthBtn"){
        // console.log("birth OK");
        landingPage.style.display = "none";
        container_Birth.style.display = "block";
        container_submit.style.display = "block";
        status = 0;
    }
    if(e.target.id == "iconBtn"){
        // console.log("icon OK");
        landingPage.style.display = "none";
        container_Constellation.style.display = "block";
        container_Animal.style.display = "block";
        container_submit.style.display = "block";
        status = 1;
    }
}
landingPage.addEventListener('click', showChosen);


// 判斷使用者選擇的星座和生肖
function checkResult(e){
    e.preventDefault();
    // console.log(userForm.birthYear.value);
    var year = userForm.birthYear.value;
    var month = userForm.birthMonth.value;
    var day = userForm.birthDay.value;
    // 計算生肖用
    var tmp = (1901 - year) % 12;
    var conArr = ['牡羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天秤座', '天蠍座', '射手座', '摩羯座', '水瓶座', '雙魚座'];
    var animalArr = ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'];
    if(status == 0){
        if (year < 1 || month < 1 || day < 1) {
            alert("請填寫完整優 <3");
        }else{
            // 判斷星座
            if (month == 1 && day >= 20 || month == 2 && day <= 18) {
                conResult = "水瓶座";
            }
            if (month == 2 && day >= 19 || month == 3 && day <= 20) {
                conResult = "雙魚座";
            }
            if (month == 3 && day >= 21 || month == 4 && day <= 19) {
                conResult = "牡羊座";
            }
            if (month == 4 && day >= 20 || month == 5 && day <= 20) {
                conResult = "金牛座";
            }
            if (month == 5 && day >= 21 || month == 6 && day <= 21) {
                conResult = "雙子座";
            }
            if (month == 6 && day >= 22 || month == 7 && day <= 22) {
                conResult = "巨蟹座";
            }
            if (month == 7 && day >= 23 || month == 8 && day <= 22) {
                conResult = "獅子座";
            }
            if (month == 8 && day >= 23 || month == 9 && day <= 22) {
                conResult = "處女座";
            }
            if (month == 9 && day >= 23 || month == 10 && day <= 22) {
                conResult = "天秤座";
            }
            if (month == 10 && day >= 23 || month == 11 && day <= 21) {
                conResult = "天蠍座";
            }
            if (month == 11 && day >= 22 || month == 12 && day <= 21) {
                conResult = "射手座";
            }
            if (month == 12 && day >= 22 || month == 1 && day <= 19) {
                conResult = "摩羯座";
            }
            // 判斷生肖
            if (tmp == 1 || tmp == -11) {
                animalResult = "鼠";
            }
            if (tmp == 0 || tmp == -12) {
                animalResult = "牛";
            }
            if (tmp == 11 || tmp == -1) {
                animalResult = "虎";
            }
            if (tmp == 10 || tmp == -2) {
                animalResult = "兔";
            }
            if (tmp == 9 || tmp == -3) {
                animalResult = "龍";
            }
            if (tmp == 8 || tmp == -4) {
                animalResult = "蛇";
            }
            if (tmp == 7 || tmp == -5) {
                animalResult = "馬";
            }
            if (tmp == 6 || tmp == -6) {
                animalResult = "羊";
            }
            if (tmp == 5 || tmp == -7) {
                animalResult = "猴";
            }
            if (tmp == 4 || tmp == -8) {
                animalResult = "雞";
            }
            if (tmp == 3 || tmp == -9) {
                animalResult = "狗";
            }
            if (tmp == 2 || tmp == -10) {
                animalResult = "豬";
            }
            showResult(conArr, animalArr);
        }
    } else if (status == 1) {
        // 檢查使用者是否兩個圖案都有選到
        var check_con_status = 0;
        var check_animal_status = 0;
        for (var i = 0; i < userForm.con.length; i++) {
            if (userForm.con[i].checked) {
                conResult = conArr[userForm.con[i].value];
                // console.log(userForm.con[i].value);
                check_con_status = 1;
            }
        }
        for (var i = 0; i < userForm.ani.length; i++) {
            if (userForm.ani[i].checked) {
                animalResult = animalArr[userForm.ani[i].value];
                // console.log(userForm.ani[i].value);
                check_animal_status = 1;
            }
        }
        if(check_con_status == 0 || check_animal_status ==0){
            alert("星座和生肖都要選優 <3");
        }else{
            showResult(conArr, animalArr);
        }
    }
    // console.log(conResult + " " + animalResult);
}
// 顯示運勢預測結果
function showResult(conArr, animalArr){
    var conIndex = conArr.indexOf(conResult);
    var animalIndex = animalArr.indexOf(animalResult);
    // console.log(conIndex + " " + animalIndex);
    showSomething.innerHTML =
        `
        <h2>您的星座是: ${conResult}</h2>
        <br>
        ${colPrediction[conIndex]
            .replace(/QT/g, "<span class='title'>").replace(/Qt/g, "</span>")
            .replace(/Qn/g, "<br>")
            .replace(/QG/g, "<span class='green'>").replace(/Qg/g, "</span>")
            .replace(/QR/g, "<span class='red'>").replace(/Qr/g, "</span>")
            .replace(/QB/g, "<span class='blue'>").replace(/Qb/g, "</span>")
            .replace(/QO/g, "<span class='orange'>").replace(/Qo/g, "</span>")
        }
        <br>
        <h2>您的生肖是: ${animalResult}</h2>
        <br>
        <span class="title">今年運勢</span>
        <br>
        ${animalPrediction[animalIndex]}
        `;
}
submitBtn.addEventListener('click', checkResult);


// reset 除了預設清除表單選項也清除顯示的結果
function clearResult(){
    showSomething.innerHTML = "";
}
resetBtn.addEventListener('click', clearResult);


document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', "Don't copy <3");
});


// 回首頁
function goHome(e){
    userForm.reset();
    landingPage.style.display = "flex";
    container_Birth.style.display = "none";
    container_Constellation.style.display = "none";
    container_Animal.style.display = "none";
    container_submit.style.display = "none";
    showSomething.innerHTML = "";
    status = -1;
}
home.addEventListener('click', goHome);
phone_home.addEventListener('click', goHome);