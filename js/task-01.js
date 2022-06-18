
const categoriesEl = document.querySelectorAll('.item');

console.log("Number of categories:", categoriesEl.length);

const makeEl = categoriesEl.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent)
    console.log("Elements:", element.lastElementChild.querySelectorAll('li').length);
});
