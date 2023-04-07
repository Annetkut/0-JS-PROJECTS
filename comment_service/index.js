"use strict";
const nameInput = document.getElementById("name");
const avatarInput = document.getElementById("avatar");
const commentInput = document.getElementById("comment");
// const btn = document.getElementsByClassName("btn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

function handleLowerUpperCase(text) {
    // split the input string into an array of words
    const words = text.toLowerCase().split(' ');
    // loop through each word in the array
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