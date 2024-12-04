// Я не помню как там называлось первое, но пусть будет Hello world
var a;
a = 10;
alert("a")
alert ("Hello World")

// Калькулятор

let res;

const operator = prompt('Введите оператор (\+, \-, \* или /):');

const number1 = parseFloat(prompt('Введите первое число: '));
const number2 = parseFloat(prompt('Введите второе число: '));

switch(operator) {
  case '+': res = number1 + number2; alert(`${number1} + ${number2} = ${res}`); break;
  case '-': res = number1 - number2; alert(`${number1} - ${number2} = ${res}`); break;
  case '*': res = number1 * number2; alert(`${number1} * ${number2} = ${res}`); break;
  case '/': res = number1 / number2; alert(`${number1} / ${number2} = ${res}`); break;
  default: console.log('Неверный оператор'); break;
}

// Факториал
var N = prompt('Введите факториал')
var M = 1;
var F = 1;
while(M !== N){
    F = F * M;
if (M == N){
   alert(F);
}else{
    M = M + 1;
}
}

// Загадка
// Смирнов Дмитрий Исп 309