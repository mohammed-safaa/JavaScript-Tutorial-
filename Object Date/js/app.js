var myDay = new Date();

document.write(myDay);

document.write("<br>");

//--------------- Date ---------------------

var myDay = new Date();
var myDate = myDay.getDate();
var myMonth = myDay.getMonth()+1;
var myYear = myDay.getFullYear();

document.write(myDate+"<br>"+myMonth+"<br>"+myYear+"<br>");

//--------------- Time --------------------

var myDay = new Date();
var myHours = myDay.getHours();
var myMinutes = myDay.getMinutes();
var mySeconds = myDay.getSeconds();

document.write(myHours+" : "+myMinutes+" : "+mySeconds+"<br>");

//--------------- Time function myWatch() Action ---------------------

function myWatch() {

    var myDay = new Date();
    var myHours = myDay.getHours();
    var myMinutes = myDay.getMinutes();
    var mySeconds = myDay.getSeconds();
    document.getElementById("myWatch").innerHTML = myHours+" : "+myMinutes+" : "+mySeconds+"<br>";

// كل 1000 ملسكنت اجلب الفكشينس

    setTimeout( function() {
        myWatch();
    }, 1000);
} //  نهاية الفكشينس

//يجلب الفكشينس عند تحميل الصفحة

window.onload = function myloaded() {
    myWatch();
}



// --------------------------------------------