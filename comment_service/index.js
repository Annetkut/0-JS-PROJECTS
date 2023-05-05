"use strict";
const nameInput = document.getElementById("name");
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
// const btn = document.getElementsByClassName("btn");
const result1 = document.querySelector('.chat_img');
const result2 = document.querySelector('.chat_username');
const result3 = document.querySelector('.chat_message');

function handleLowerUpperCase(text) {
    // переписывает в нижний регистр и разделяет строку на слова, создавая массив
    // const words = text.toLowerCase().split(' ');
    text = text.toLowerCase();
    const words = text.split(' ');
    // прохожу цикл по всем эллементам (словам) в массиве words
    for (let i = 0; i < words.length; i++) {
        // capitalize the first letter of the current word
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // join the array of words back into a string and return it
    return words.join(' ');
}

function viewAll(event) {
    event.preventDefault(); // prevent form submission
    result1.innerHTML = handleLowerUpperCase(nameInput.value);
    result2.innerHTML = avatarInput.value;
    result3.innerHTML = commentInput.value;
}
btn.onclick = viewAll;


document.getElementById("btn").onclick = viewAll;



// function calcMinus() {
//     const a = aInput.value;
//     const b = bInput.value;
//     result.innerHTML = "результат: " + (a - b);
// }
// minusBtn.onclick = calcMinus;