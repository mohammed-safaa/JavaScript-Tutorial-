// ----------------Function byNameSumNum -----------------------

function byNameSumNum() {
   
    var num1 = parseInt(document.getElementsByName("myInput1")[0].value);
    var num2 = parseInt(document.getElementsByName("myInput2")[0].value);

sum = num1 + num2 ;

document.getElementById("myp").innerHTML = sum ;

}

// -------------------------------------------------------------

// ----------------Function byNameSum -----------------------

function byNameSum() {
   
    var num1 = document.getElementsByName("myInput3")[0].value ;
    var num2 = document.getElementsByName("myInput4")[0].value ;

sum =  num1.concat(num2);

document.getElementById("mypSum").innerHTML = sum ;

}

// -------------------------------------------------------------

