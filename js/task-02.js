const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const categoriesList = document.querySelector('#ingredients');
const liArr = [];

ingredients.forEach(ingredient => {
  const createLi = document.createElement('li')
  createLi.className = 'item'
  createLi.textContent = ingredient;
  liArr.push(createLi)

})
categoriesList.append(...liArr)

