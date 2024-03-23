import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { displayImages } from "./js/render-functions";
import { pixabaySearch } from "./js/pixabay-api";

const searchButton = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const loader = document.createElement('div');
loader.style.display = 'none';

document.body.appendChild(loader);

searchButton.addEventListener('click', () => {
    loader.style.display = 'block';
    gallery.innerHTML = '';
    
    pixabaySearch()?.then(() => {
        loader.style.display = 'none';
    }).catch(error => {
        loader.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: error.message,
            position: 'topCenter'
        });
    });
});

