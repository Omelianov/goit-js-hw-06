// Напиши скрипт, который реагирует на изменение значения
//  input#font - size - control(событие input) и 
//  изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка
//  будет меняться размер текста.


const inputChange = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

inputChange.addEventListener('input', event => {
    textChange.style.fontSize = `${event.target.value}px`
})

