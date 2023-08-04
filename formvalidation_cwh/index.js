function clearErrors(){
    errors=document.getElementsByClassName("formerror");
    for(let item of errors)
    {
        item.innerHTML="";
    }
}

function seterror(id,error){
// sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validateForm()
{
    var retval=true;
    clearErrors();
    //perform validation of validation fails set value of retval to false
    var name=document.forms["myForm"]["fname"].value;
    
    if(name.length<5){
        seterror("name","*Length of name is too short");
        retval= false;
    }

    var email=document.forms["myForm"]["femail"].value;
    if(email.length>30)
    {
        seterror("email","*Email cannot be more that 20 in length");
        retval= false;
    }
    var phone=document.forms["myForm"]["fphone"].value;
    if(phone.length!=10)
    {
        seterror("phone","*Phone Number should be of 10 digits");
        retval= false;
    }
    var password=document.forms["myForm"]["fpass"].value;
    var lowercase=/[a-z]/g;
    var uppercase=/[A-Z]/g;
    var digit=/[0-9]/g;
    if(!(password.match(lowercase) && password.match(uppercase) && password.match(digit) && password.length>=6)) 
    {
        seterror("pass","Password must be more than 6 characters, should contain atleast a digit, uppercase letter and lowercase letter.");
        retval= false;
    } 
    var cpassword=document.forms["myForm"]["fcpass"].value;
    if(cpassword!=password)
    {
        seterror("cpass","*Password should match the one entered above.");
        retval=false;
    }
    return retval;
}
