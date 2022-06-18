
const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('[id="value"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

console.log("~ counterValue", counterValue)

refs.incrementBtn.addEventListener('click', () => {

    console.log("counterValue", counterValue)
    counterValue += 1;
    refs.value.textContent = counterValue;
});

refs.decrementBtn.addEventListener('click', () => {
    
    console.log("counterValue", counterValue)
    counterValue -= 1;
    refs.value.textContent = counterValue;
});


