import $ from "jquery";

export function activePage() {
  $("[nav-link]").filter(function () {
    return $(this).attr('href').toLowerCase() === window.location.pathname.toLowerCase();
  }).addClass('_active-page');
}