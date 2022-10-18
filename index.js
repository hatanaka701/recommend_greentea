let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let result = document.getElementById('result');

let array = []

btn1.addEventListener('click', () => {
    array.push(1);
});

btn2.addEventListener('click', () => {
    array.push(2);
});

btn3.addEventListener('click', () => {
    array.push(3);
});