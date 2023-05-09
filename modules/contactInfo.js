/* eslint-disable no-use-before-define */
import { body } from './header.js'

export const contact = document.createElement('section');
contact.className = 'contact-section';
contact.style.display = 'none';
contact.innerHTML =
  `<h2>Contact information</h2>
  <p >
    Do you have any question, or just want to say "Hello"? <br />
    You have reachout to us:
  </p>
  <ul>
    <li class="email">Our email: mail@mail.com</li>
    <li class="phone">Our phone number: +233 55 3665 190 or</li>
    <li class="address">456 Coding Street, City, Country</li>
  </ul>`
body.appendChild(contact);

export { contact as default };