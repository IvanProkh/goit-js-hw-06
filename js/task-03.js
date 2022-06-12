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
console.log("~ images", images[0].url)



// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const gallery = document.querySelector('[class="gallery"]');

const makeImages = option => option.map((element, index, array) => {

  const itemElement = document.createElement('li');
  const imgElement = document.createElement('img');
  
    itemElement.appendChild(imgElement);
    imgElement.alt = array[index].alt;
    imgElement.src = array[index].url;

    console.log("~ imgElement", imgElement)

    gallery.appendChild(itemElement);
    
    return gallery;
    

    
  });

  makeImages(images);
  
  console.log("~ gallery", gallery)

// const itemElement = document.createElement('li');
// console.log("~ itemElement", itemElement)

// const imgElement = document.createElement('img');
// itemElement.appendChild(imgElement);
// imgElement.alt = images[0].alt;
// imgElement.src = images[0].url;

// console.log("~ imgElement", imgElement)

// gallery.appendChild(itemElement);