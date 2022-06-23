 function demo(){
   
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025; //now hieght in meter
   
    var newbmivalue = weight / (height * height);
    
    document.getElementById('result').value = newbmivalue;

} 