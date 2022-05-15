"use strict";
//Форма регистрации

function validateForm() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let city = document.getElementById('city').value;
  let password = document.getElementById('password');
  let email = document.getElementById('email');

  document.getElementById("errorMessage").innerHTML = "";

  if (firstName == "") {
    document.getElementById("errorMessage").innerHTML += "Необходимо ввести имя!<br>";
  } 
  if (lastName == "") {
    document.getElementById("errorMessage").innerHTML += "Необходимо ввести фамилию!<br>";
  } 
  if (city == "") {
    document.getElementById("errorMessage").innerHTML += "Укажите город!<br>";
  } 
  if (email.value == "") {
    document.getElementById("errorMessage").innerHTML += "Необходимо ввести адрес почты!<br>";
  }
  if (password.value == "") {
    document.getElementById("errorMessage").innerHTML += "Необходимо ввести пароль!<br>";
  } else if (password.value.length <= 8) {
    document.getElementById("errorMessage").innerHTML += "Ваш пароль слишком короткий!<br>";
  }
  else {
    alert (`Добро пожаловать, ${firstName} ${lastName}!`);
  }
} 

let register = document.querySelector(".login__btn");
register.onclick = validateForm;


//Калькулятор

let ev;

function getResult() {
  let result;
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  switch (ev) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b==0) {
        document.getElementById("check").innerHTML = "На ноль делить нельзя!"
      }
      else {
      result = a / b;}
      break;
  }
  document.getElementById("result").innerHTML = result;
}

let equall = document.getElementById("equall");
equall.onclick = getResult;

function getClean() {
  document.getElementById('result').innerHTML="";
};

let clean = document.getElementById('reset');
clean.onclick = getClean;

//Выбор темы

let select = document.querySelector('.themes');
select.addEventListener('change', function() {
  document.body.style.backgroundColor = select.value
});
