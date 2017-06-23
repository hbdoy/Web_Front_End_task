var myInput = document.getElementById('myInput');
var myBtn = document.getElementById('myBtn');
var myList = document.getElementById('myList');
// list items in localStorage
var toDoStr = localStorage.getItem('toDo');
// tmp of list items
var listData = [];

function updateList(){
    var str = "";
    // let listData be equal to the latest list items in localStorage
    listData = (toDoStr == null)? []:JSON.parse(toDoStr);
    for(var i = 0; i < listData.length; i++){
        str += '<li>' + '<a href="#" data-num = ' + i + '>刪除</a>' + listData[i] + '</li>';
    }
    myList.innerHTML = str;
}
// first update when web page is loaded
updateList();

// when user changed something on list,let toDoStr be equal to the latest listData
function updateLocalStorage(){
    toDoStr = JSON.stringify(listData);
    localStorage.setItem('toDo', toDoStr);
    updateList();
}

// delete list item of listData
function deleteLi(e){
    var num = e.target.dataset.num;
    // console.log(num);
    if(num >= 0){
        // console.log('HIHI');
        listData.splice(num, 1);
        updateLocalStorage();
    }
}

function addItem(){
    var value = myInput.value;
    if(value != ''){
        listData.push(value);
        updateLocalStorage();
        myInput.value = "";
    }
}

myInput.addEventListener('keydown', function(e){
    // console.log(e.keyCode);
    if(e.keyCode == 13) addItem();
});
myBtn.addEventListener('click', addItem);
myList.addEventListener('click', deleteLi);

