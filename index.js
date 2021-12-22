let btn = document.getElementById("btn");

function demo(){
    let hei = document.getElementById("height").value;
    let wei = document.getElementById("weight").value;
    let res = document.getElementById("result");
    res.value =wei/ Math.pow(hei,2);
}