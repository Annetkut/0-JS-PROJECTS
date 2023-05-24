"use strict";

const nameInput = document.getElementById("name");
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
const my_form = document.getElementById("my_form");
const resultImage = document.querySelector(".chat_img");
const resultUser = document.querySelector(".chat_username");
const resultMessage = document.querySelector(".chat_message");
const resultTime = document.querySelector(".chat_date");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');


checkboxes.forEach(checkBox => {
  checkBox.addEventListener('change', event => {
    checkboxes.forEach(otherCheckBox => {
      if (checkBox !== otherCheckBox) {
        otherCheckBox.checked = false; // снимаем отметку с другого чекбокса
      }
    });
  });
}); 

// Приводим текст к нижнему регистру и заменяем множественные пробелы на один
function handleLowerUpperCase(text) {
  text = text.toLowerCase().replace(/\s+/g, " ");

  // Если строка пустая, то вместо имени выводим "username"
  if (!text.trim()) {
    const serverName = "username";
    return serverName;
  } else {
    // Разбиваем текст на массив слов по пробелам
    const words = text.split(" ");
    // Если в массиве 1 слово, то делаем первую букву заглавной и возвращаем
    if (words.length == 1) {
      return words[0].replace(words[0][0], words[0][0].toUpperCase());
    }
    // Если в массиве 2 слова, то делаем первую букву каждого слова заглавной и объединяем
    else if (words.length == 2) {
      const new_family_name = words[0].replace(
        words[0][0],
        words[0][0].toUpperCase()
      );
      const new_name = words[1].replace(words[1][0], words[1][0].toUpperCase());
      return new_family_name + " " + new_name;
    }
    // Если в массиве 3 слова, то делаем первую букву каждого слова заглавной и объединяем
    else if (words.length == 3) {
      const new_family_name = words[0].replace(
        words[0][0],
        words[0][0].toUpperCase()
      );
      const new_name = words[1].replace(words[1][0], words[1][0].toUpperCase());
      const otschestvo = words[2].replace(
        words[2][0],
        words[2][0].toUpperCase()
      );
      return new_family_name + " " + new_name + " " + otschestvo;
    }
    // Возвращаем "Error!" если в массиве больше 3 слов
    else {
      return "Error!";
    }
  }
}

// Вывод даты в формате Wed, 17 May 2023 at 20:08:41
function formatCurrentDate() {
  // Создание объекта даты
  const currentDate = new Date();

  // Получение дня недели в виде строки
  const weekDay = currentDate.toLocaleString("en-us", {
    weekday: "short",
  });

  // Получение месяца в виде строки
  const month = currentDate.toLocaleString("en-us", {
    month: "short",
  });

  // Получение даты в виде числа
  const date = currentDate.getDate();

  // Получение года в виде числа
  const year = currentDate.getFullYear();

  // Получение часа в виде числа
  const hour = String(currentDate.getHours()).padStart(2, '0');

  // Получение минут в виде числа
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  // Получение секунд в виде числа
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');


  // Вывод даты в консоли в нужном формате
  const formatDate = `${weekDay}, ${date} ${month} ${year} at ${hour}:${minutes}:${seconds}`;
  return formatDate;
}

// Функция checkSpam принимает текст и заменяет в нем слова "viagra" и "XXX" на звездочки
// Флаг "ig" в регулярном выражении указывает на регистронезависимый поиск
const checkSpam = (text) => {
  return text.replace(/viagra|XXX/gi, "***");
};

function viewAll(event) {
  event.preventDefault(); // prevent form submission предотвращать отправление формы

  // конвертировать регистр имени пользователя
  let convertedUserName = handleLowerUpperCase(nameInput.value);
  if (convertedUserName === "Error!") {
    alert("Имя пользователя не может содержать более 3 слов!");
  } else {
    // установить изображение пользователя
    resultImage.style.backgroundImage = `url(${avatarInput.value})`;
    // установить измененное имя пользователя в соответствующий тэг
    resultUser.innerHTML = convertedUserName;
     // установить дату отправки сообщения
    resultTime.innerHTML = formatCurrentDate();
    // заменить неприемлемые слова в сообщении пользователя и установить текст в соответствующий тэг
    resultMessage.innerHTML = checkSpam(commentInput.value);
  }

  // сбросить форму
  my_form.reset();
}

// document.getElementById("btn").onclick = viewAll;
document.getElementById("btn").addEventListener("click", viewAll);
