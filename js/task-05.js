
const refs = {
    inputName: document.querySelector('[id="name-input"]'),
    userName: document.querySelector('[id="name-output"]'),
};

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {

    if (refs.inputName.value === '') {
        refs.userName.textContent = 'Anonymous!'
    } else {
        refs.userName.textContent = event.currentTarget.value;
    }

    console.log(event.currentTarget.value)
};
