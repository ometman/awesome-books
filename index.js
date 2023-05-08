/* eslint-disable no-use-before-define */
import { mainHeader } from './modules/header.js';
import pageSwitch from './modules/contentSwitch.js';
import { mainFooter } from './modules/footer.js';
import addNewBook from './modules/addbook-event.js';

window.onload = () => {
  mainHeader.style.display = 'block';
  pageSwitch();
  mainFooter.style.display = 'block';
  addNewBook();
};