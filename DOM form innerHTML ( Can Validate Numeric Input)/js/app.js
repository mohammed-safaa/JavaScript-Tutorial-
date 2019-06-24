// ---------------- form ------------------

function myFormBu(){

   var mymessage ;

    if (document.myForm.input1.value.length > 7) {

        mymessage = "good" ;
    }else{
        mymessage = "to bad" ;
    }

    document.getElementById("error").innerText = mymessage ;
}
// ----------------------------------------
