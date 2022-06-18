
const refs = {
    inputSizeControl: document.querySelector('[id="font-size-control"]'),
    inputText: document.querySelector('[id="text"]'),
};

console.log("~ inputSizeControl", refs.inputSizeControl);
console.log("~ inputSizeControl", refs.inputText);

refs.inputSizeControl.addEventListener('input', onInputChangeSize);
document.addEventListener("DOMContentLoaded", onInputChangeSize, { once: true });

function onInputChangeSize(event) {
    const size = refs.inputSizeControl.value;

    refs.inputText.style.fontSize = `${size}px`;
};


