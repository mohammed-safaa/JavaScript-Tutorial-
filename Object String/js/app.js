var name = "mohammed";
var lname = new String ("safaa");

document.write(name.charAt(3) +"<br>"); // اختيار الرقم الحرف في المتغير رقم 3 يعني اختيار الرقم الرابع من الكلمة ولان رقم 0 هو واحد

// طريقة ربط متغيرين مع بعض 
document.write(name.concat(lname+"<br>"));

//-------------------------------------------------

//من اين يبدء تسلسل هذه الكلمة 
var myInfo = "mohammed safaa alzobie";

document.write(myInfo.indexOf("alzobie"));

document.write("<br>");
//-------------------------------------------------

// من اين يبدء تسلسل هذه الكلمة تقريبا نفس عمل الاول
var myInfo = "mohammed safaa alzobie";

document.write(myInfo.lastIndexOf("alzobie"));
document.write("<br>");
//-------------------------------------------------

//تحويل المتغير الى احرف سمول
var myInfo = "mohammed safaa alzobie";

document.write(myInfo.toLocaleLowerCase()+"<br>");

document.write("<br>");
//-------------------------------------------------

//تحويل المتغير الى احرف كابتل
var myInfo = "mohammed safaa alzobie";

document.write(myInfo.toLocaleUpperCase()+"<br>");

document.write("<br>");
//-------------------------------------------------

//اختيار عدد الحروف الظاهره من صفر الى 4 حروف
var myInfo = "mohammed safaa alzobie";

document.write(myInfo.slice(0,4)+"<br>");

document.write("<br>");
//-------------------------------------------------

//لمسح المسافاه في نهاية المتغير 
var myInfo = "  mohammed safaa alzobie ";

document.write(myInfo.trim());

document.write("<br>");
//-------------------------------------------------