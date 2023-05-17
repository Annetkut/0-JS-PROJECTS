let Input = document.getElementById("a");
let squareBtn = document.getElementById("square");
let result = document.getElementById("result");


function calcSquare() {
    let a = +(Input.value);
    result.innerHTML = "результат: " + (a ** 2);
}
squareBtn.onclick = calcSquare;