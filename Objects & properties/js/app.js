
var animal = new Object();

animal.name = "cat";
animal.age = "1";
animal.color = "white";


document.write(animal.name+"<br>"+animal.age+"<br>"+animal.color);
document.write("<br>");

//----------------------------------------------

function myEmployee(id,name,lname,age,dept,salary) {
    this.id = id ;
    this.name = name;
    this.lname = lname;
    this.age = age;
    this.dept = dept;
    this.salary = salary;
}

emp = new myEmployee(313,"mohammed","safaa","35","programmer",1500);

document.write(emp.id+emp.name+emp.lname+emp.age+emp.dept+emp.salary);