/* eslint-disable no-use-before-define */
export { body, mainHeader };

// create header element
const body = document.querySelector('body');
const mainHeader = document.createElement('header');
mainHeader.id = 'main-header';
mainHeader.style.display = 'none';
mainHeader.innerHTML = `
<!-- header section with logo/name, menu and date -->
<div class="header">
    <logo class="logo"><img src="ab-logo-bg.png" alt="Awesome Books logo"></logo>
    <nav class="header-nav">
      <ul class="menu">
        <li class="menu-item" value="list"><a href="#">List</a><span>|</span></li>
        <li class="menu-item" value="add"><a href="#">Add new </a><span>|</span></li>
        <li class="menu-item" value="info"><a href="#">Contact</a></li>
      </ul>
    </nav>
</div>;`;

body.appendChild(mainHeader);

