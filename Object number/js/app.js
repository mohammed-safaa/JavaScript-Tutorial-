var num1 = 4 ;
var num2 = 2.4 ;
var num3 = 124e5 ;
var num4 = new Number(13);


document.write(num1 +"<br>");
document.write(num2 +"<br>");
document.write(num3 +"<br>");
document.write(num4 +"<br>");


num5 = num3.toString(); // view string
document.write(num5 +"<br>");

num6 = num2.toFixed(); // view Before point 2.4 > 2  يظهر الرقم قبل البوينت 
document.write(num6 +"<br>");

num7 = num2.toPrecision(3); // view 3 Number 2.4 > 2.40  يظهر 3 ارقام حسب التحديد الرقم داخل القوسين
document.write(num7 +"<br>");

num8 = num3.toExponential(); // يظهر الرقم مع عدد الاصفار المتبقية
document.write(num8 +"<br>");

