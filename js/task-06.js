
const inputForm = document.querySelector('#validation-input');

inputForm.addEventListener('blur', onBorderChange);

function onBorderChange(event) {
    const lengthText = event.currentTarget.value.length;

    if (Number(inputForm.dataset.length) === lengthText) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    } else {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid');
    }
    
};



