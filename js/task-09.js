function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const addClass = document.body.classList.add('main');
const bgBodyClass = document.querySelector('.main')
const spanColor = document.querySelector('.color')
const btnColor = document.querySelector('.change-color')



btnColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bgBodyClass.style.backgroundColor = randomColor
  spanColor.textContent = randomColor
})



