// Напиши скрипт, который при потере фокуса на
// инпуте(событие blur), проверяет его содержимое 
// на правильное количество введённых символов.

const textInput = document.querySelector('#validation-input');
const dataLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', () => {
    const inputValue = textInput.value.trim();
    const isValid = inputValue.length === dataLength;

    if (isValid) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});