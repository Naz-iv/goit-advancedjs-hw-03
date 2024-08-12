import { loadData } from './js/pixabay-api'
import { render } from './js/render-function';

const mainForm = document.querySelectorAll(".search")[0];
let loader = document.querySelector("div.loader-panel");
loader.style.display = "none";

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = mainForm.elements['search-query'].value;
    loader.style.display = "block";
    const oldElements = document.querySelectorAll("li.result-item");
    
    if (oldElements && oldElements.length > 0) {
        oldElements.forEach(element => element.remove());
    }

    loadData(searchQuery,
        response => render(response.hits),
        error => console.error(error),
        () => loader.style.display = "none");
});