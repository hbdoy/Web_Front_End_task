var w = window.innerWidth;
var h = window.innerHeight;

var allCar = document.querySelectorAll('.car');
var userForm = document.getElementById('userForm');
var carNum = document.getElementById('carNum');
var msg = document.getElementById('msg');
var carSpeed = [];

var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var reStart = document.getElementById('reStart');
var shouldStop = 0;


function showCar(){
    // console.log(carNum.value);
    for(var i = 0; i < carNum.value; i++){
        allCar[i].style.display = "inline-block";
        allCar[i].style.left = (w - 64) + "px";
        allCar[i].style.top = (h * 0.5 - 230 + 64 * i) + "px";
        carSpeed.push(Math.random() * 8);
    }
    carNum.style.display = 'none';
    msg.style.display = 'inline-block';
    msg.textContent = '你選擇了 ' + carNum.value + ' 輛車車';
}
userForm.onchange = showCar;

function run() {
    if(carNum.value == 0){
        alert('請先選擇車車喔');
        return;
    }
    if(!shouldStop){
        for (var i = 0; i < carNum.value; i++) {
            var posX = parseInt(allCar[i].style.left);
            if(posX < 0){
                shouldStop = 1;
                alert('第 ' + (i + 1) + ' 台車車贏囉~');
                break;
            }else{
                posX -= carSpeed[i];
                allCar[i].style.left = posX + "px";
            }
        }
        setTimeout("run()", 10);
    }
}
startBtn.onclick = run;

function stop() {
    if(carNum.value != 0)
        shouldStop = 1;
}
stopBtn.onclick = stop;

function restart(){
    if(shouldStop){
        for (var i = 0; i < carNum.value; i++) {
            allCar[i].style.display = "none";
        }
        msg.style.display = 'none';
        carNum.style.display = 'inline-block';
        userForm.reset();
        shouldStop = 0;
        hasShow = 0;
    }
}
reStart.onclick = restart;