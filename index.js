/* eslint-disable no-use-before-define */
import { mainHeader } from './modules/header.js';
import pageSwitch from './modules/contentSwitch.js';
import { theFooter } from './modules/footer.js';
import { addNewBook } from './modules/addbook-event.js';
// import { currentDate } from './modules/getCurrrentDate.js';

window.onload = () => {
  mainHeader.style.display = 'block';
  pageSwitch();
  theFooter.style.display = 'block';
  // currentDate()
  addNewBook();
};