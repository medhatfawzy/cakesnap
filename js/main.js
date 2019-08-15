"use strict";
const submitBtn = document.getElementById("subBut");

//5 <= password length <= 16
const passRegex = /^.{5,16}$/;

const emailRegex = /^[a-z]\w{3,15}@\w{3,10}\.\w{2,6}$/i;

//Name can only contain letters
const nameRegx = /^[a-z]{2,12}$/i;

//A function to colour the field icon svg with red and make it flash
var displayError = field => {
  let icon = document.getElementById(`${field.id}Icon`);
  icon.classList.add("error", "animated", "flash");
  icon.addEventListener("animationend", () => {
    icon.classList.remove("animated", "flash");
  });
  //To support older browsers
  icon.addEventListener("webkitanimationend", () => {
    icon.classList.remove("animated", "flash", "error");
  });
};

// A function to colour the icon back to its default colour
var removeError = field => {
  document.getElementById(`${field.id}Icon`).classList.remove("error");
};

//A function to check the validity of the inputs
var valdation = () => {
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let noError = true;

  if (!emailRegex.test(email.value)) {
    displayError(email);
    noError = false;
  } else removeError(email);

  if (!passRegex.test(password.value)) {
    displayError(password);
    noError = false;
  } else removeError(password);

  if (!nameRegx.test(name.value)) {
    displayError(name);
    noError = false;
  } else removeError(name);

  if (noError) document.getElementById("userForm").submit();
};

submitBtn.onclick = valdation;
