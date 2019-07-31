"use strict";
const submitBtn = document.getElementById("subBut");
const passRegex = /^.{5,16}$/;
const emailRegex = /^[a-z]\w{3,15}@\w{3,10}\.\w{2,6}$/i;
const nameRegx = /^[a-z]{2,12}$/i;

var displayX = field => {
  let icon = document.getElementById(`${field.id}Icon`);
  icon.innerHTML = `<i class="fas fa-times"></i>`;
  icon.classList.add("animated", "flash");
  icon.addEventListener("animationend", () =>
    icon.classList.remove("animated", "flash")
  );
  icon.addEventListener("webkitanimationend", () =>
    icon.classList.remove("animated", "shake")
  );
};
var removeX = field => {
  let icon = document.getElementById(`${field.id}Icon`);
  if (field.id === "name") {
    icon.innerHTML = `<i class="far fa-user-circle"></i>`;
  } else if (field.id === "email") {
    icon.innerHTML = `<i class="fas fa-envelope"></i>`;
  } else if (field.id === "password") {
    icon.innerHTML = `<i class="fas fa-lock"></i>`;
  }
};
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
