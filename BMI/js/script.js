var myHeight = document.getElementById('myHeight');
var myWeight = document.getElementById('myWeight');
var resultIcon = document.getElementById('resultIcon');
var myList = document.getElementById('BMIList');
var health = document.querySelector('.health');
var BMIClear = document.getElementById('BMIClear');
// BMI data in localStorage
var BMIStr = localStorage.getItem('BMI');
// tmp of BMI data
var listData = [];
// description for BMI
var healthStr = '';
var color = '';

function updateList(){
    // let listData be equal to the latest BMI data in localStorage
    listData = (BMIStr == null)? []:JSON.parse(BMIStr);
    var str = "";
    var len = listData.length;
    // show results from end to start
    for(var i = 0, j = len - 1; i < len; i++, j--){
        str +=
        `<li style="border-left: 7px solid ${listData[j].color}">
          <div class="BMIList_healthStr">${listData[j].health}</div>
          <div class="BMIList_BMI">${listData[j].BMI}</div>
          <div class="BMIList_weight">${listData[j].weight}kg</div>
          <div class="BMIList_height">${listData[j].height}cm</div>
          <div class="BMIList_date">${listData[j].date}</div>
        </li>`;
    }
    myList.innerHTML = str;
}
// first update when web page is loaded
updateList();

// when user changed something on list,let BMIStr be equal to the latest listData
function updateLocalStorage(){
    BMIStr = JSON.stringify(listData);
    localStorage.setItem('BMI', BMIStr);
    updateList();
}

function BMICal(){
    var height = parseInt(myHeight.value);
    var weight = parseInt(myWeight.value);
    if(!isNaN(height) && !isNaN(weight)){
        if(height > 0 && height < 300 && weight > 0 && weight < 800){
            var result = (weight / Math.pow((height/100), 2)).toFixed(2);
            saveToListData(height, weight, result);
            changeIcon(result);
        }else{
            alert('請輸入正常範圍的身高體重喔>///<');
            reStart();
        }
    }
}

function saveToListData(height, weight, result){
    var today = new Date();
    var str = {};
    str.height = height;
    str.weight = weight;
    str.date = today.getHours() + ":" + today.getMinutes() + "-" + (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();
    str.BMI = result;
    checkHealth(result);
    str.health = healthStr;
    str.color = color;
    // only save ten results
    if(listData.length == 9){
        listData.splice(0, 1);
    }
    listData.push(str);
    updateLocalStorage();
}

function changeIcon(result){
    resultIcon.style.display = "none";
    health.style.display = "block";
    health.innerHTML =
    `${result}
    <span id="BMIText">BMI</span>
    <div id="healthText">${healthStr}</div>
    <div id="loopImg" style="background-color: ${color}"></div>`;
    health.style.borderColor = color;
    health.style.color = color;
}

function checkHealth(BMI){
    if(BMI < 18.5){
        healthStr = '過輕';
        color = '#31BAF9';
    }else if(24 > BMI && BMI >= 18.5){
        healthStr = '理想';
        color = '#86D73E';
    }else if(27 > BMI && BMI >= 24){
        healthStr = '過重';
        color = '#FF982D';
    }else if(30 > BMI && BMI >= 27){
        healthStr = '輕度肥胖';
        color = '#FF6C02';
    }else if(35 > BMI && BMI >= 30){
        healthStr = '中度肥胖';
        color = '#FF6C02';
    }else if(BMI >= 35){
        healthStr = '重度肥胖';
        color = '#FF1200';
    }
}

function reStart(){
    health.style.display = "none";
    resultIcon.style.display = "block";
    myHeight.value = "";
    myWeight.value = "";
}

function clearBMI(){
    listData = [];
    updateLocalStorage();
}

resultIcon.addEventListener('click', BMICal);
health.addEventListener('click', reStart);
BMIClear.addEventListener('click', clearBMI);
