// Вывод даты в формате Wed, 17 May 2023 at 20:08:41

// Создание объекта даты
const currentDate = new Date();

// Получение дня недели в виде строки
const weekDay = currentDate.toLocaleString('en-us', {weekday: 'short'});

// Получение месяца в виде строки
const month = currentDate.toLocaleString('en-us', {month: 'short'});

// Получение даты в виде числа
const date = currentDate.getDate();

// Получение года в виде числа
const year = currentDate.getFullYear();

// Получение часа в виде числа
const hour = currentDate.getHours();

// Получение минут в виде числа
const minutes = currentDate.getMinutes();

// Получение секунд в виде числа
const seconds = currentDate.getSeconds();

// Вывод даты в консоли в нужном формате
console.log(`${weekDay}, ${date} ${month} ${year} at ${hour}:${minutes}:${minutes}`);
