// event to add book
newBk.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector('#bk-title').value;
    const bookAuthor = document.querySelector('#bk-author').value;
    const awesomeBooks = new BooksClass(bookTitle, bookAuthor);
    awesomeBooks.AddBook();
    awesomeBooks.ShowAllBooks();
    newBk.reset();
  });