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
var otladke=0;
otvet = prompt("Ты играешь в Дота 2?")
if (otvet == 'Да')
{
    alert("Верно");
    otladke = otladke + 1;
} else{
    alert("Не верно");
}
otvet1 = prompt('Ты гей?')
if (otvet1 == да)
{
alert('Я знаю)');
otladke = otladke + 1;
} else{
alert('Чувствую ложь');
}
if(otladke == 2 )
{
alert('конец');
} else{
alert('Не конец');
}
// Угадай число
let InputNum = prompt("Введите результат умножения вашего числа на 2 и прибавления 7: ");

let UserNumber = parseInt(InputNum);

let origNumber = (UserNumber - 7) / 2;

alert("Вы задумали число: " + origNumber);

// Палиндром

function Palindrome () {
    return text === text.split('').reverse().join('');
  }
  
  let name = prompt("Введите вашу фамилию:");
  
  if (Palindrome(name)) {
    console.log("Ваша фамилия — палиндром!");
  } else {
    console.log("Ваша фамилия — не палиндром.");
  }
  
  