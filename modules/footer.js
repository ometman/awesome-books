/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import { body } from './header.js';

export { mainFooter };

const mainFooter = document.createElement('footer');
mainFooter.className = 'footer';
mainFooter.style.display = 'none';
mainFooter.innerHTML = '<p class="footer-info order0">Copyright</p>';
body.appendChild(mainFooter);