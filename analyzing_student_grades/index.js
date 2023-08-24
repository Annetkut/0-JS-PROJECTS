//Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.

//Шаги выполнения:

//1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
const grades = [
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
    Math.ceil(Math.random() * 100),
];

console.log(grades);

//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.

let sum = 0; // Создаем переменную `sum`, которая будет хранить сумму оценок.

grades.forEach ((grade) => {
    sum += grade;
})

const calcAverage = sum / grades.length; // Рассчитываем средний балл.
console.log(calcAverage);

//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);
console.log(maxGrade);

//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
console.log(minGrade);

//5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = grades.filter((el)=>el >= 60);
console.log("Number of students with positive grades:", positiveGrades.length);
console.log("Filtered Grades:", positiveGrades);

//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades = grades.length - positiveGrades.length;
console.log("Number of negative grades:", negativeGrades);

/*7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    - Если оценка ниже 20, преобразуйте её в "E"
    
    Выведите все найденные значения на экран.*/

    grades.forEach(grade => {
if(grade >= 80){ 
	console.log("A");
} else if (grade >= 60){
	console.log("B");
} else if (grade >= 40){
	console.log("C");
} else if (grade >= 20){
	console.log("D");
} else {
	console.log("E");
}
});