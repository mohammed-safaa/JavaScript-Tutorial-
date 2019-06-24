
function personInfo(id , name , lname , age){

    this.id = id ;
    this.name = name ;
    this.lname = lname ;
    this.age = age ;

    this.changePersonAge =  changeAge;

    function changeAge(params) {
        this.age = params;
    }
}


myperson1 = new personInfo (1, "mohammed" , "safaa" , 35);
myperson2 = new personInfo (2, "mohammed" , "jawad" , 22);
myperson3 = new personInfo (3, "ahmed" , "gala" , 18);

myperson1.changePersonAge(66);
document.write(myperson1.age);

document.write("<br>"+myperson1.id+"<br>"+myperson1.name+"<br>"+myperson1.lname+"<br>"+myperson1.age);