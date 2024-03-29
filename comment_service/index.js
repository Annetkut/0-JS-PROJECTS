"use strict";

const nameInput = document.getElementById("name");
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
const my_form = document.getElementById("my_form");
const resultImage = document.querySelector(".chat_img");
const listMassages = document.querySelector(".list-massages");
const resultUser = document.querySelector(".chat_username");
const resultMessage = document.querySelector(".chat_message");
const resultTime = document.querySelector(".chat_date");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');


let selectedСheckBox = '';
checkboxes.forEach(checkBox => {
  checkBox.addEventListener('change', event => {
    selectedСheckBox = checkBox.value
    console.log(selectedСheckBox)
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
  if (!text.trim()|| selectedСheckBox == '0') {
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
    // создаем элемент разметки, которую потом удочерим 
    const mess = document.createElement('div'); 
    mess.className = 'mess';
    // создаем пустую переменную куда будем сохранять либо ссылку пользователя на аватар, либо путь в файловой системе к одной из картинок в папке img
    let current_image;
    // проверяем вставил ли пользователь ссылку на аватар
    if (avatarInput.value) {
      // если да, то сохраняем в переменную эту ссылку
      current_image = avatarInput.value;
    } else {
      // если нет ссылки, то создаем массив с путями к стандартным картинкам 
      let standard_images = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg','./img/9.jpg'];
      // Generate a random
      let randomIndex = Math.floor(Math.random() * standard_images.length);
      current_image = standard_images[randomIndex];
    }
    
    // Check if current_image is a local file path or a URL
    const isLocalPath = current_image.startsWith('./img/'); // -> True or False
    const backgroundImage = isLocalPath ? `url(${current_image})` : `url(${avatarInput.value})`;

    //<div class="chat_img" style="background-image:url(${current_image})"></div>
    mess.innerHTML = ` 
        <div class="chat_top"> 
            <div class="chat_top_user">  
            <div class="chat_img" style="background-image:${backgroundImage}"></div>
              <div class="chat_username">${convertedUserName}</div> 
            </div> 
            <div class="chat_date">${formatCurrentDate()}</div> 
        </div> 
        <div class="chat_message">${checkSpam(commentInput.value)}</div> 
    ` 
    listMassages.prepend(mess); 
    // установить изображение пользователя
    //resultImage.style.backgroundImage = `url(${avatarInput.value})`;
    // установить измененное имя пользователя в соответствующий тэг
    //resultUser.innerHTML = convertedUserName;
     // установить дату отправки сообщения
    //resultTime.innerHTML = formatCurrentDate();
    // заменить неприемлемые слова в сообщении пользователя и установить текст в соответствующий тэг
    //resultMessage.innerHTML = checkSpam(commentInput.value);
  }

    // сбросить форму
  my_form.reset();

  }



// document.getElementById("btn").onclick = viewAll;
document.getElementById("btn").addEventListener("click", viewAll);
