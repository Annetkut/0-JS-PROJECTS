"use strict";
const nameInput = document.getElementById("name");
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
const resultImage = document.querySelector('.chat_img');
const resultUser = document.querySelector('.chat_username');
const resultMessage = document.querySelector('.chat_message');

function handleLowerUpperCase(text) {
    // переписывает в нижний регистр и разделяет строку на слова, создавая массив
    // const words = text.toLowerCase().split(' ');
    text = text.toLowerCase();
    text = text.replace(/\s+/g, " ");
    const words = text.split(' '); // words = ["фамилия", "имя", "очество"]

    if (words.length == 3) {
        let fio = "";
        const new_family_name = words[0].replace(words[0][0], words[0][0].toUpperCase());
        const new_name = words[1].replace(words[1][0], words[1][0].toUpperCase());
        const otschestvo = words[2].replace(words[2][0], words[2][0].toUpperCase());
        fio = fio + new_family_name + " " + new_name + " " + otschestvo;
        return fio;
    } else {
        return "Error!";
    }

}

function checkSpam(text){
    text = text.replace(/viagra/ig, "***");
    text = text.replace(/XXX/ig, "***");
    return text;
}

function showAvatarImage(image_url){
    if (image_url.includes(".png")) {
        image_url = image_url.split(".png")[0] + ".png";
    } else if (image_url.includes(".jpg")) {
        image_url = image_url.split(".jpg")[0] + ".jpg";
    } else if (image_url.includes(".jpeg")) {
        image_url = image_url.split(".jpeg")[0] + ".jpeg";
    } else if (image_url.includes(".gif")) {
        image_url = image_url.split(".gif")[0] + ".gif";
    } else if (image_url.includes(".webp")) {
        image_url = image_url.split(".webp")[0] + ".webp";
    } else if (image_url.includes(".bmp")) {
        image_url = image_url.split(".bmp")[0] + ".bmp";
    } else if (image_url.includes(".svg")) {
        image_url = image_url.split(".svg")[0] + ".svg";
    }
    return "<img src=\"" + image_url + "\" class=\"image_itself\">";
}

function viewAll(event) {
    event.preventDefault(); // prevent form submission предотвращать отправление формы‚
    let convertedUserName = handleLowerUpperCase(nameInput.value);
    if (convertedUserName === "Error!") {
        alert("Введите ровно 3 слова: Фамилию, имя и очество!");
    } else {
        resultUser.innerHTML = convertedUserName;
        resultImage.innerHTML = showAvatarImage(avatarInput.value);
        resultMessage.innerHTML = checkSpam(commentInput.value);
    }
}
btn.onclick = viewAll;

document.getElementById("btn").onclick = viewAll;
