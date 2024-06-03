
import { database } from "./database.js";
import { pikoDex } from "./pikomon.js";

export const displayPikoDex = () => {
    const container = document.getElementById('container');

    database.forEach(pikomon => {
        const pikomonBlock = pikoDex(pikomon);
        container.appendChild(pikomonBlock);
    });
};

// Call the pikoDex function on page load
document.addEventListener('DOMContentLoaded', displayPikoDex);

//const container = document.querySelector('#container')
