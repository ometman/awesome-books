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