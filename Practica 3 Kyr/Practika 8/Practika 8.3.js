// Задание №3
let numArray = [5, -3, 4, 8, -1, 6, 7, 1, 0, 4, 6, -2, 11, 9, 4, 0, 3];
let sumPositive = 0;
let countPositive = 0;
let sumNegative = 0;
let countNegative = 0;
let countZero = 0;

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > 0) {
    sumPositive += numArray[i];
    countPositive++;
  } else if (numArray[i] < 0) {
    sumNegative += numArray[i];
    countNegative++;
  } else {
    countZero++;
  }
}

let avgPositive = countPositive > 0 ? sumPositive / countPositive : 0;
let avgNegative = countNegative > 0 ? sumNegative / countNegative : 0;

console.log("Среднее арифметическое положительных:", avgPositive);
console.log("Среднее арифметическое отрицательных:", avgNegative);
console.log("Количество нулей:", countZero);
// Дмитрий Смирнов Исп 309
