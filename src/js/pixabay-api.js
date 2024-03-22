import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchInput = input.value.trim();

  if (searchInput !== "") {
    const apiKey = '9233093-942588744ee96c4f575017f3e';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network res not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('fetch problem', error);
      });
  } else {
    iziToast.error({
      title: 'Error',
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: 'topCenter'
    });
    iziToast.error({
      title: 'Error',
      message: "Empty input!",
      position: 'topCenter'
    });
  }
});
