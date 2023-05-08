// page for adding books via form
export { addBookForm }
import { body } from './header.js';

const addBookForm = document.createElement('section');
addBookForm.className = 'add-books-section';
addBookForm.style.display = 'none'
addBookForm.innerHTML =
  `<h2>Add a new book:</h2>
    <form id="new-bk">
      <input id="bk-title" type="text" name="title" placeholder="Title" required />
      <input id="bk-author" type="text" name="author" placeholder="Author" required />
      <button id="add-bk" class="add-book-btn order2" type="submit">ADD</button>
    </form>`
body.appendChild(addBookForm);