
const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = form.elements;
    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All fields must be filled!');
        return;
    }

    const data = {
        emailValue,
        passwordValue
    };

    console.log(data);
    form.reset();
});







