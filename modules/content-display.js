menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const key = item.getAttribute('value');
  
      switch (key) {
        case 'list':
        {
          hideAll();
          collection.style.display = 'block'; break;
        }
  
        case 'add':
        {
          hideAll();
          add.style.display = 'block'; break;
        }
  
        case 'info':
        {
          hideAll();
          info.style.display = 'block'; break;
        }
  
        default: collection.style.display = 'block';
          break;
      }
    });
  });
  