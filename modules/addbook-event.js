/* eslint-disable no-use-before-define */
import { BooksClass } from './bookClass.js';

export { addNewBook };

// event to add book
newBk.addEventListener('submit', (e) => {

  const addNewBook = () => {
    const newBk = document.querySelector('#new-bk');
    newBk.addEventListener('submit', (e) => {
      e.preventDefault();
      const bookTitle = document.querySelector('#bk-title').value;
      const bookAuthor = document.querySelector('#bk-author').value;
      const awesomeBooks = new BooksClass(bookTitle, bookAuthor);
      awesomeBooks.AddBook();
      awesomeBooks.ShowAllBooks();
      newBk.reset();
    });

    const awesomeBooksIn = new BooksClass();
    if (awesomeBooksIn.getLocalStorage().length > 0) {
      awesomeBooksIn.ShowAllBooks();
    } else {
      const showBks = document.querySelector('#show-bks');
      showBks.textContent = 'No books currrently added';
    } // get store books or show message if empty
  };

