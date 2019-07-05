"use strict";
var submitBut = document.getElementById("subBut");
var passRegex = /^.{5,16}$/;
var emailRegex = /[a-z]\w{3,7}@\w{3,10}\.\w{2,6}$/i;
var nameRegx = /^[a-z]{2,12}$/i;

var valdation = ()=>{
    
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let name = document.getElementById("name");

    if(!emailRegex.test(email.value)) {
        console.log("invalid email");
    }
    else if(!passRegex.test(password.value)) {
        console.log("invalid password");
    }
    else if(!nameRegx.test(name.value)) {
        console.log("invalid name");
    }
    else{
        document.getElementById("userForm").submit();
    }
};

submitBut.onclick = valdation;
