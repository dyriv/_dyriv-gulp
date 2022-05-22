export function burgerMenu() {
  const burger_btn = document?.querySelector('[burger-btn]');
  const nav_menu = document?.querySelector('[nav-menu]');

  burger_btn?.addEventListener('click', (e) => {
    burger_btn?.classList.toggle('burger--active');
    nav_menu?.classList.toggle('menu--active');

    if (nav_menu?.classList.contains('menu--active')) {
      burger_btn?.setAttribute('aria-expanded', 'true');
      burger_btn?.setAttribute('aria-label', 'Close menu');
      disableScroll();
    } else {
      burger_btn?.setAttribute('aria-expanded', 'false');
      burger_btn?.setAttribute('aria-label', 'Open menu');
      enableScroll();
    }
  });
}