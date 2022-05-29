export function menu_burger() {
  const burger_btn = document?.querySelector('[burger-btn]');
  const nav_menu = document?.querySelector('[nav-menu]');

  burger_btn?.addEventListener('click', (e) => {
    burger_btn?.classList.toggle('burger--active');
    nav_menu?.classList.toggle('menu--active');

  });
}

