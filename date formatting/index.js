// Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
// получим текущее время пользователя и компоненты этого времени
let date = new Date();
date.setDate(24);
date.setMonth(11);
date.setFullYear(2021);
let year = date.getFullYear(); 
let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' }).replace("ь","я").replace("март","марта").replace("май","мая").replace("август","августа");
let hours = date.getHours();
let minutes = date.getMinutes();


console.log(date);
console.log(month);
console.log(day);
console.log(year);
console.log(hours);
console.log(minutes);

console.log (`${day} ${month} ${year} года ${hours} часов ${minutes} минут`);