const cityListElement = document.getElementById('cityList');
const cities = ['Москва', 'Вашингтон', 'Берлин', 'Париж', 'Лондон', 'Пекин'];
const cityTemperature = [];

// Итерируемся по массиву городов 'cities' с помощью цикла for и запрашиваем у пользователя ввод температуры для каждого города
for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const cityTemperatureFromUser = Number(prompt(`Введите температуру для города ${city}:`));
    console.log(cityTemperatureFromUser);
    cityTemperature.push(cityTemperatureFromUser);

    // Создаем новый элемент списка <li>, который будет содержать информацию о городе и его температуре
    const listItemElement = document.createElement('li');
    // Устанавливаем текстовое содержимое элемента списка <li> с использованием шаблонной строки
    listItemElement.textContent = `${city}: ${cityTemperatureFromUser}°C`;
    // Каждый элемент списка будет содержать информацию о каждом городе и его температуре
    cityListElement.appendChild(listItemElement);
}

const maxTemperature = Math.max(...cityTemperature);

const minTemperature = Math.min(...cityTemperature);

const listItemElement2 = document.createElement('p');
listItemElement2.textContent = `Максимальная температура: ${maxTemperature}°C`;

const listItemElement3 = document.createElement('p');
listItemElement3.textContent = `Минимальная температура: ${minTemperature}°C`;

document.body.appendChild(listItemElement2);
document.body.appendChild(listItemElement3);