const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const gallery = document.querySelector('[class="gallery"]');

const makeImages = (images) => {
  const { url, alt } = images;
  return`
  <li>
    <img src = "${url}" alt = "${alt}" width = "400 px">
    </img>
  </li>
  `
}

const elements = images
  .map(makeImages)
  .join(' ');

gallery.insertAdjacentHTML('beforeend', elements);

console.log("~ gallery", gallery)


gallery.style.display = "flex";
gallery.style.listStyle = "none";
gallery.style.justifyContent = "space-between";
gallery.style.height = "200 px";
gallery.style.objectFit = "cover";

// gallery.style.maxWidth = "300px";
// gallery.style.flexDirection = "row";

// const makeImages = option => {
//   return option.map((element, index, array) => {
  
  //     const itemElement = document.createElement('li');
  //     const imgElement = document.createElement('img');
  
  //     itemElement.append(imgElement);
  //     imgElement.alt = array[index].alt;
//     imgElement.src = array[index].url;
    
//     return itemElement;

//   });
// };

// const elements = makeImages((images));

// gallery.append(...elements);