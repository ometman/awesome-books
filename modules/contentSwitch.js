import { addBookForm } from './addBooksForm.js';
import { collection } from './collectionsDisplay.js';
import { contact } from './contactInfo.js';

export default function pageSwitch() {
  collection.style.display = 'block';

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const key = item.getAttribute('value');
      switch (key) {
        case 'list':
          {
            collection.style.display = 'block';
            contact.style.display = 'none';
            addBookForm.style.display = 'none'; break;
          }

        case 'add':
          {
            addBookForm.style.display = 'block';
            contact.style.display = 'none';
            collection.style.display = 'none'; break;
          }

        case 'info':
          {
            contact.style.display = 'block';
            addBookForm.style.display = 'none';
            collection.style.display = 'none'; break;
          }

        default: collection.style.display = 'block';
          break;
      }
    });
  });
}

