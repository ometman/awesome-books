/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { body } from './header.js';

export { collection };

const collection = document.createElement('section');
collection.className = 'collection';
collection.style.display = 'none';
collection.innerHTML = ` <h2>All Awesome Books</h2>
    <div id="show-bks"></div>`;
body.appendChild(collection);
