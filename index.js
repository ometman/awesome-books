/* eslint-disable no-use-before-define */
import { mainHeader } from './modules/header.js';
import hideSome from './modules/pageHide.js';
import { mainFooter } from './modules/footer.js';

window.onload = () => {
  mainHeader.style.display = 'block';
  hideSome();
  mainFooter.style.display = 'block';
};
// const newBk = document.querySelector('#new-bk');
// const currentDate = document.querySelector('.current-date');
