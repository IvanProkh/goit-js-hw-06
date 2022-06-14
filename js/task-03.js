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

const gallery = document.querySelector('[class="gallery"]');

const makeImages = (images) => {
  const { url, alt } = images;
  return`
  <li>
    <img src = "${url}" alt = "${alt}" width = "400px" height = "250px">
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
gallery.style.justifyContent = "space-between";
gallery.style.alignItems = "center";
gallery.style.objectFit = "cover";
gallery.style.listStyle = "none";

