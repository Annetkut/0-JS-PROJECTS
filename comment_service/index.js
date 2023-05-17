"use strict";

const nameInput = document.getElementById("name");
//ссылка на картинку для теста https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
const my_form = document.getElementById("my_form");

const resultImage = document.querySelector(".chat_img");
const resultUser = document.querySelector(".chat_username");
const resultMessage = document.querySelector(".chat_message");

function handleLowerUpperCase(text) {
  // переписывает в нижний регистр и разделяет строку на слова, создавая массив
  // const words = text.toLowerCase().split(' ');
  text = text.toLowerCase();
  text = text.replace(/\s+/g, " ");
  const words = text.split(" "); // words = ["фамилия", "имя", "очество"]

  if (words.length == 1) {
    return words[0].replace(words[0][0], words[0][0].toUpperCase());
  } else if (words.length == 2) {
    const new_family_name = words[0].replace(
      words[0][0],
      words[0][0].toUpperCase()
    );
    const new_name = words[1].replace(words[1][0], words[1][0].toUpperCase());
    return new_family_name + " " + new_name;
  } else if (words.length == 3) {
    const new_family_name = words[0].replace(
      words[0][0],
      words[0][0].toUpperCase()
    );
    const new_name = words[1].replace(words[1][0], words[1][0].toUpperCase());
    const otschestvo = words[2].replace(words[2][0], words[2][0].toUpperCase());
    return new_family_name + " " + new_name + " " + otschestvo;
  } else {
    return "Error!";
  }
}

const checkSpam = (text) => {
  return text.replace(/viagra|XXX/gi, "***");
};

function viewAll(event) {
  event.preventDefault(); // prevent form submission предотвращать отправление формы‚
  // поменять регистр фио пользователя
  let convertedUserName = handleLowerUpperCase(nameInput.value);
  if (convertedUserName === "Error!") {
    alert("Введите фамилию, имя и очество!");
  } else {
    // вставить картинку по ссылке пользователя
    resultImage.style.backgroundImage = `url(${avatarInput.value})`;
    // вставить поправленное фио пользователя в нужный htmpl тэг
    resultUser.innerHTML = convertedUserName;
    // зацензурить текст сообщения пользователя и вставить в нужный htmpl тэг
    resultMessage.innerHTML = checkSpam(commentInput.value);
  }
  my_form.reset();
}

// document.getElementById("btn").onclick = viewAll;
document.getElementById("btn").addEventListener("click", viewAll);
