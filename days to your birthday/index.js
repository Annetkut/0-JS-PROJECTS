const birthdayInput = document.getElementById('birthday');
const calculateBtn = document.querySelector('button');
const resultDaysToBirthday = document.getElementById('result');

function getDayDeclension(number) {
    if (number === 1) {
        return 'день';
    } else if (number >= 2 && number <= 4) {
        return 'дня';
    } else {
        return 'дней';
    }
}




function calculateDaysToBirthday() {
    const birthdayDate = new Date(birthdayInput.value);
    const currentDate = new Date();

    // Установка времени даты рождения и текущей даты в полночь
    birthdayDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    // Получение разницы в миллисекундах между датами
    const timeDiff = birthdayDate - currentDate;

    // Получение разницы в днях
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    const declension = getDayDeclension(daysDiff);
    
    if (daysDiff >= 0) {
        resultDaysToBirthday.textContent = `До вашего дня рождения осталось ${daysDiff} ${declension}!`;
        resultDaysToBirthday.classList.remove('error');
    } else if (birthdayInput.value !== '') {
        resultDaysToBirthday.textContent = 'Уже прошел ваш день рождения в этом году!';
        resultDaysToBirthday.classList.remove('error');
    } else {
        resultDaysToBirthday.textContent = 'Введите дату!';
        resultDaysToBirthday.classList.add('error');
    }
}