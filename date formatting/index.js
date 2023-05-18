// Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
// получим текущее время пользователя и компоненты этого времени
let date = new Date();
date.setDate(24);
date.setMonth(2);
date.setFullYear(2021);
let year = date.getFullYear(); 
let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' }).replace("ь","я").replace("март","марта").replace("май","мая").replace("август","августа");
let hours = date.getHours();
let minutes = date.getMinutes();

let dayWord;
if (day === 1 || day === 21 || day === 31) {
  dayWord = "день";
} else if (day === 2 || day === 3 || day === 4 || day === 22 || day === 23 || day === 24) {
  dayWord = "дня";
} else {
  dayWord = "дней";
}
let hoursWord;
if (hours === 1 || hours === 21) {
  hoursWord = "час";
} else if (hours === 2 || hours === 3 || hours === 4 || hours === 22) {
  hoursWord = "часа";
} else {
  hoursWord = "часов";
}
let minutesWord;
if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
  minutesWord = "минута";
} else if (minutes === 2 || minutes === 3 || minutes === 4 || minutes === 22 || minutes === 23 || minutes === 24 || minutes === 32 || minutes === 33 || minutes === 34 || minutes === 42 || minutes === 43 || minutes === 44 || minutes === 52 || minutes === 53 || minutes === 54) {
  minutesWord = "минуты";
} else {
  minutesWord = "минут";
}

console.log(date);
console.log(month);
console.log(day);
console.log(year);
console.log(hours);
console.log(minutes);
console.log(`${day} ${month} ${year} года ${hours} ${hoursWord} ${minutes} ${minutesWord}`);