
const refs = {
    form: document.querySelector('[class="login-form"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault()

    const {
        elements: { email, password }
    } = event.currentTarget;

    const userEmail = email.value;
    const userPassword = password.value;
    
    if (userEmail === "" || userPassword === "") {
        return alert('Заповніть форму до кінця');
    } else {
        const formData = {
        userEmail,
        userPassword,
    };
    console.log(formData);
    }

    event.currentTarget.reset()
};
