// Number of categories: 3

const categoriesEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesEl.length);


// Category: Animals
// Elements: 4

// const firstNameCategory = categoriesEl[0].querySelector('h2');
// console.log("Category:", firstNameCategory.textContent);
// const firstQuantityEl = categoriesEl[0].querySelectorAll('li');
// console.log("Elements:", firstQuantityEl.length);

console.log("Category:", categoriesEl[0].firstElementChild.textContent)
console.log("Elements:", categoriesEl[0].lastElementChild.querySelectorAll('li').length);

// // Category: Products
// // Elements: 3

// const secondNameCategory = categoriesEl[1].querySelector('h2');
// console.log("Category:", secondNameCategory.textContent)
// const secondQuantityEl = categoriesEl[1].querySelectorAll('li');
// console.log("Elements:", secondQuantityEl.length);

console.log("Category:", categoriesEl[1].firstElementChild.textContent)
console.log("Elements:", categoriesEl[1].lastElementChild.querySelectorAll('li').length);

// // Category: Technologies
// // Elements: 5

// const thirdNameCategory = categoriesEl[2].querySelector('h2');
// console.log("Category:", thirdNameCategory.textContent)
// const thirdQuantityEl = categoriesEl[2].querySelectorAll('li');
// console.log("Elements:", thirdQuantityEl.length);

console.log("Category:", categoriesEl[2].firstElementChild.textContent)
console.log("Elements:", categoriesEl[2].lastElementChild.querySelectorAll('li').length);