/* eslint-disable no-use-before-define */
import { mainHeader } from './modules/header.js';
import pageSwitch from './modules/contentSwitch.js';
import { mainFooter } from './modules/footer.js';
import addNewBook from './modules/addBookForm.js';
import { currentDate } from './modules/getCurrrentDate.js';

window.onload = () => {
  mainHeader.style.display = 'block';
  pageSwitch();
  mainFooter.style.display = 'block';
  currentDate()
  addNewBook();
};