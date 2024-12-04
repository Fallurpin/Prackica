// Задание №1
function ChillGay() {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(Math.floor(Math.random() * 41 - 10));
    }
  
    const PosNum = arr.filter(num => num > 0);
  
    if (PosNum.length > 0) {
      const avg = PosNum.reduce((sum, num) => sum + num, 0) / PosNum.length;
      console.log("Массив:", arr);
      console.log("Среднее арифметическое положительных элементов:", avg);
    } else {
      console.log("Массив:", arr);
      console.log("В массиве нет положительных элементов.");
    }
  }
  
  ChillGay();
  // Дмитрий Смирнов Исп 309