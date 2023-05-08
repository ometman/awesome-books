import { addBookForm } from "./addBooksForm.js";
import { collection } from "./collectionsDisplay.js";
import { contact } from "./contactInfo.js";

export default function hideAll() {
    collection.style.display = 'none';
    addBookForm.style.display = 'none';
    contact.style.display = 'none';
  }
