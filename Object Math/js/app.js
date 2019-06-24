
// استخراج الجذر التربيعي للمتغير

var num1 = 4 ;
var num2 = Math.sqrt(num1);

document.write(num2+"<br>");

//------------------------------------------

// يعطي ارقام عشوائيه من الصفر بوينت

var num3 = 6 ;
var num4 = Math.random();

document.write(num4+"<br>");

//------------------------------------------

// يعطي ارقام رياضية اوس 


var num5 = Math.pow(2,4);

document.write(num5+"<br>");

//------------------------------------------


//تقريب لاصغير رقم 

var num6 = Math.floor(2.7);

document.write(num6+"<br>");

//------------------------------------------


//تكبير لاكبر رقم 

var num7 = Math.ceil(2.7);

document.write(num7+"<br>");

//------------------------------------------

//تكبير لاكبر رقم وتصغير لاصغر رقم 

var num8 = Math.round(2.3);
var num9 = Math.round(2.7);

document.write("2.3 = "+num8 +"<br>");
document.write("2.7 = "+num9 +"<br>");

//------------------------------------------
// تحويل الارقام التي تحتوي على سالب وموجب الى ارقام حقيقية مطلقة
var num10 = Math.abs(8);
var num11 = Math.abs(-8);

document.write("8 = "+num10 +"<br>");
document.write("-8 = "+num11 +"<br>");

//------------------------------------------
