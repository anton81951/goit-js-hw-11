import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { displayImages } from "./render-functions";

document.querySelector(".form").addEventListener("submit", event => {
  event.preventDefault();
  pixabaySearch(event);
});

function pixabaySearch(event) {
  event.preventDefault();

  const form = document.querySelector('.form');
  const input = document.querySelector('.input');
  const gallery = document.querySelector('.gallery');

  const searchInput = input.value.trim();

  if (searchInput !== "") {
    const apiKey = '9233093-942588744ee96c4f575017f3e';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topCenter'
          });
        } else {
          displayImages(data.hits);
        }
      })
      .catch(error => {
        console.error('fetch problem', error);
      });
  } else {
    iziToast.error({
      title: 'Error',
      message: "Empty input!",
      position: 'topCenter'
    });
  }
}

export { pixabaySearch };

