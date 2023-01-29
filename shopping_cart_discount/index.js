let getPrices = document.querySelectorAll('.price');
let discountClicked = false;
let discountSum = 0;
let startSum = 0;

// 'for (let price of getPrices) {
//     console.log("Старая цена:", price.textContent)
//     price.textContent = (Number(price.textContent) *  0.8).toFixed(2);
//     console.log("Цена со скидкой 20%:", price.textContent)
// }'

function calsStartSum() {
    for (let price of getPrices) {
        startSum += Number(price.textContent);
        price.textContent += " руб"  
    }
    console.log("Цена без скидки:", startSum);
    document.querySelector('.result__info_value').textContent = startSum.toFixed(2) + " руб";
}
calsStartSum();

function applyDiscount() {
    if (discountClicked == false){
        for (let price of getPrices) {
            console.log("Старая цена:", price.textContent);
            price.textContent = (Number(price.textContent.replace(" руб", "")) *  0.8).toFixed(2) + " руб";
            discountSum += Number(price.textContent.replace(" руб", ""));
            console.log("Цена со скидкой 20%:", price.textContent);
        }
        console.log("Общаяя сумма со скидкой 20%:", discountSum.toFixed(2));
        document.querySelector('.result__info_value').textContent = discountSum.toFixed(2) + " руб";
        discountClicked = true;
    } else {
        console.log("Скидка уже активирована!")
    }       
}



// str1 = "6999.00 руб"
// console.log(str1)
// str1 = Number(str1.replace(" руб", "")).toFixed(2);
// console.log(str1)