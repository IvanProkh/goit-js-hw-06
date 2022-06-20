function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bgColor: document.querySelector('.color'),
  buttonChange: document.querySelector('.change-color'),
}

console.log("~ bgColor", refs.bgColor)
console.log("~ buttonChange", refs.buttonChange)

refs.buttonChange.addEventListener('click', onBgChangeColor);

function onBgChangeColor(event) {

  document.body.style.backgroundColor = getRandomHexColor();
  refs.bgColor.textContent = getRandomHexColor();
}




