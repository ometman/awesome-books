/* eslint-disable no-use-before-define */
import { BooksClass } from './bookClass.js';

// event for adding book
export const addNewBook = () => {
  const newBk = document.querySelector('#new-bk');
  newBk.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector('#bk-title').value;
    const bookAuthor = document.querySelector('#bk-author').value;
    const awesomeBooks = new BooksClass(bookTitle, bookAuthor);
    awesomeBooks.addBook();
    awesomeBooks.showAllBooks();
    newBk.reset();
  });

  const awesomeBooksIn = new BooksClass();
  if (awesomeBooksIn.getLocalStorage().length > 0) {
    awesomeBooksIn.showAllBooks();
  } else {
    const showBks = document.querySelector('#show-bks');
    showBks.textContent = 'No books currrently added';
  } // get store books or show message if empty
}
export { addNewBook as default };