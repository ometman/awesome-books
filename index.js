/* eslint-disable no-use-before-define */
const newBk = document.querySelector('#new-bk');
const currentDate = document.querySelector('.current-date');

// CURRENT DATE
const date = new Date();
currentDate.append(document.createElement('p').innerHTML = `${date}`);

class BooksClass {
  constructor(bookTitle, bookAuthor) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.bookCollection = JSON.parse(localStorage.getItem('Books')) || [];
  }

  AddBook() {
    const { title } = this;
    const { author } = this;
    this.bookCollection.push({ title, author });
    localStorage.setItem('Books', JSON.stringify(this.bookCollection));
  }

  ShowAllBooks() {
    const showBks = document.querySelector('#show-bks');
    showBks.innerHTML = '';
    for (let i = 0; i < this.bookCollection.length; i += 1) {
      const addedBk = document.createElement('div');
      addedBk.className = 'added-bks';
      addedBk.style.backgroundColor = '#d3d3d3';
      addedBk.id = `${i}`;
      addedBk.innerHTML = `
              <p class="new-book-title">${this.bookCollection[i].title}</p>
              <p class="new-book-author">${this.bookCollection[i].author}</p> 
              <button id="del-bk">Remove</button>`;
      showBks.appendChild(addedBk);
    }

    const removeBtns = document.querySelectorAll('.added-bks');
    this.removeBook(removeBtns);
  }// ShowAllBooks

  removeBook(removeBtns) {
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.bookCollection.splice(btn.getAttribute('id'), 1);
        localStorage.setItem('Books', JSON.stringify(this.bookCollection));
        this.ShowAllBooks();
      });
    });
  }// removeBook

  getLocalStorage() {
    return this.bookCollection;
  }
}

const awesomeBooksIn = new BooksClass();
if (awesomeBooksIn.getLocalStorage().length > 0) {
  awesomeBooksIn.ShowAllBooks();
}

newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bk-title').value;
  const bookAuthor = document.querySelector('#bk-author').value;
  const awesomeBooks = new BooksClass(bookTitle, bookAuthor);
  awesomeBooks.AddBook();
  awesomeBooks.ShowAllBooks();
  newBk.reset();
});

// NAVIGATION
const menuItems = document.querySelectorAll('.menu-item');
const collection = document.querySelector('.collection');
const add = document.querySelector('.add-books-section');
const info = document.querySelector('.contact-section');
hideAll();
collection.style.display = 'block';

function hideAll() {
  collection.style.display = 'none';
  add.style.display = 'none';
  info.style.display = 'none';
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const key = item.getAttribute('value');

    switch (key) {
      case 'list':
      {
        hideAll();
        collection.style.display = 'block'; break;
      }

      case 'add':
      {
        hideAll();
        add.style.display = 'block'; break;
      }

      case 'info':
      {
        hideAll();
        info.style.display = 'block'; break;
      }

      default: collection.style.display = 'block';
        break;
    }
  });
});
