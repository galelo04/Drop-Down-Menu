const DropDownMenuManage = (function () {
  let extendBtn;
  let menu;
  const init = () => {
    cacheDOM();
    bindEvents();
    menu.classList.add('hidden');
  };
  const cacheDOM = () => {
    extendBtn = document.querySelector('#extendBtn');
    menu = document.querySelector('.menu');
  };
  const bindEvents = () => {
    extendBtn.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        showMenu();
      } else if (menu.classList.contains('visible')) {
        hideMenu();
      }
    });
  };
  const showMenu = () => {
    menu.classList.remove('hidden');
    menu.classList.add('visible');
  };
  const hideMenu = () => {
    menu.classList.remove('visible');
    menu.classList.add('hidden');
  };
  init();
})();

console.log('hello');
