// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// const counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('[id="value"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = Number('0');
counterValue = value.textContent;

console.log("~ counterValue", counterValue)

incrementBtn.addEventListener('click', () => {
    console.log("~ counterValue", counterValue)
    // counterValue = value.textContent;
    return counterValue += 1;
});

decrementBtn.addEventListener('click', () => {
    
    console.log("~ counterValue", counterValue)
    // counterValue = value.textContent;
    return counterValue -= 1;
});


