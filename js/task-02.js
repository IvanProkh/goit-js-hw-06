const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const listLu = document.querySelector('[id="ingredients"]');

ingredients.forEach(element => {
  
  const itemLi = document.createElement('li');
  
  itemLi.classList.add('item');
  itemLi.textContent = element;
  listLu.appendChild(itemLi);
  
  return listLu;
  
});

console.log("~ listLu", listLu)


// Adds an item to the end of the list