"use strict";
const submitBtn = document.getElementById("subBut");

//5 <= password length <= 16
const passRegex = /^.{5,16}$/; 

const emailRegex = /^[a-z]\w{3,15}@\w{3,10}\.\w{2,6}$/i;

//Name can only contain letters
const nameRegx = /^[a-z]{2,12}$/i; 

//A function to replace the field icon svg with an 'X' svg
var displayX = field => {
  let icon = document.getElementById(`${field.id}Icon`);
  icon.innerHTML = `<use class="error" xlink:href="icons/sprite.svg#icon-close"></use>`;
  icon.classList.add("animated", "flash");
  icon.addEventListener("animationend", () =>
  icon.classList.remove("animated", "flash")
  );
  //To support older browsers
  icon.addEventListener("webkitanimationend", () =>
  icon.classList.remove("animated", "shake")
  );
};

//A function to replace the 'X' svg with the field icon
var removeX = field => {
  let icon = document.getElementById(`${field.id}Icon`);
  if (
    icon.innerHTML === `<use class="error" xlink:href="icons/sprite.svg#icon-close"></use>`
  ) {
    if (field.id === "name") {
      icon.innerHTML = `<use xlink:href="icons/sprite.svg#icon-user"></use>`;
    } else if (field.id === "email") {
      icon.innerHTML = `<use xlink:href="icons/sprite.svg#icon-envelope"></use>`;
    } else if (field.id === "password") {
      icon.innerHTML = `<use xlink:href="icons/sprite.svg#icon-lock"></use>`;
    }
  }
};

//A function to check the validity of the inputs
var valdation = () => {
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let noError = true;

  if (!emailRegex.test(email.value)) {
    displayX(email);
    noError = false;
  } else removeX(email);

  if (!passRegex.test(password.value)) {
    displayX(password);
    noError = false;
  } else removeX(password);

  if (!nameRegx.test(name.value)) {
    displayX(name);
    noError = false;
  } else removeX(name);

  if (noError) document.getElementById("userForm").submit();
};

submitBtn.onclick = valdation;
