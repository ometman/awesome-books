import { body } from './header.js';

const mainFooter = document.createElement('footer')
mainFooter.className = 'footer';
mainFooter.style.display = 'none'
mainFooter.innerHTML = `<p class="footer-info order0">Copyright</p>`
body.appendChild(mainFooter);

export { mainFooter }

