let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let btn1flag = false;

let result = document.getElementById('result');

btn1.addEventListener('click', () => {
    btn1flag = true
    if (btn1flag) {
        result.innerText = 'btn1が押されました';
    }
});