const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listLu = document.querySelector('ul#ingredients');

ingredients.forEach(element => {
  
  const itemLi = document.createElement('li');
  
  itemLi.classList.add('item');
  itemLi.textContent = element;
  listLu.appendChild(itemLi);
  
  return listLu;
  
});

console.log("~ listLu", listLu)


// Adds an item to the end of the list