
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться. - FIN

// Если в форме есть незаполненные поля, выводи alert с
// предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы
// используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset. - FIN

const refs = {
    form: document.querySelector('[class="login-form"]'),
    email: document.querySelector('[type="email"]'),
    password: document.querySelector('[type="password"]'),
    button: document.querySelector('[type="submit"]'),
};

console.log('form', refs.form);
console.log('email', refs.email);
console.log('password', refs.password);
console.log('button', refs.button);

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault()
};

TODO:

// refs.email.addEventListener('input', onInputEmail);

// function onInputEmail(event) {
    
//     // if (refs.email.value = '') {
//         window.alert('Заполните форму')
//     } else {

//     }

// };


refs.password.addEventListener('input', onInputPassword);

function onInputPassword (event) {

};


refs.button.addEventListener('click', onInputButtont);

function onInputButtont (event) {
    refs.form.reset()
};


console.log(refs.email.elements);