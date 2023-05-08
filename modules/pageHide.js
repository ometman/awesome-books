import { addBookForm } from "./addBooksForm.js";
import { collection } from "./collectionsDisplay.js";
import { contact } from "./contactInfo.js";

export default function hideSome() {
    collection.style.display = 'block';
    addBookForm.style.display = 'none';
    contact.style.display = 'none';
  }
