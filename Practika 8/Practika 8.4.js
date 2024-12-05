// Здание №4
let maxConsecutiveReds = 0;
let currentRedStreak = 0;

for (let i = 0; i < 1000000; i++) {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    currentRedStreak++;
  } else {
    currentRedStreak = 0;
  }

  maxConsecutiveReds = Math.max(maxConsecutiveReds, currentRedStreak);
}

console.log("Максимальное число подряд выпавших красных значений:", maxConsecutiveReds);
// Смирнов Дмитрий Исп 309
