function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('#controls>input')
const boxes = document.querySelector('#boxes')


function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = inputValue.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);