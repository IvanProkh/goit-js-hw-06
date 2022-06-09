// Number of categories: 3
const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:", itemEl.length);

// Category: Animals
// Elements: 4

const nameFirstCategory = itemEl[0].querySelector('h2');
console.log("Category:", nameFirstCategory.textContent);
const quantityFirstEl = itemEl[0].querySelectorAll('li');
console.log("Elements:", quantityFirstEl.length)


// Category: Products
// Elements: 3

const nameSecondCategory = itemEl[1].querySelector('h2');
console.log("Category:", nameSecondCategory.textContent)
const quantitySecondEl = itemEl[1].querySelectorAll('li');
console.log("Elements:", quantitySecondEl.length)

// Category: Technologies
// Elements: 5

const nameThirdCategoryFirst = itemEl[2].querySelector('h2');
console.log("Category:", nameThirdCategoryFirst.textContent)
const quantityThirdEl = itemEl[2].querySelectorAll('li');
console.log("Elements:", quantityThirdEl.length)