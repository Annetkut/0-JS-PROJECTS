/*
**Тренируем навык работы с циклами и массивами**

Вам необходимо выполнить следующие операции над массивом чисел:

1. Создайте пустой массив с именем `numbers`
2. Заполните массив `numbers` целыми числами от -10 до 10 (включительно) с помощью цикла.
3. Используя **циклы**, выполните следующие операции над массивом `numbers`:
    - Удалите все отрицательные числа из массива
    - Возведите каждое число в квадрат
    - Отсортируйте числа в порядке убывания
4. Выведите полученный массив `numbers` в консоль*/

const numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);
/*let numbers = [];
let i = -10;
while (i <= 10) {
  numbers.push(i);
  i++;
}*/
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
    }
}
console.log(numbers);

for (let i = 0; i <= numbers.length - 1; i++) {
    numbers[i] *= numbers[i]
}
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log('Result:', numbers);