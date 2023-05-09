/* eslint-disable no-use-before-define */
import { body } from './header.js';

export const theFooter = document.createElement('footer');
theFooter.className = 'footer';
theFooter.style.display = 'none';
theFooter.innerHTML = '<p class="footer-info order0">Copyright</p>';
body.appendChild(theFooter);

export { theFooter as default };