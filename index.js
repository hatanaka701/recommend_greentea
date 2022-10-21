let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let result = document.getElementById('result');

let array = []

const last = () => {
    if (array.length % 3 == 0) {
        result.innerText = array;
        array.length = 0;
    } else {
        result.innerText = '結果を出力' ;
    }
};

btn1.addEventListener('click', () => {
    array.push(1);
    last();
});

btn2.addEventListener('click', () => {
    array.push(2);
    last();
});

btn3.addEventListener('click', () => {
    array.push(3);
    last();
});