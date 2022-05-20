import $ from "jquery";

export function activePage() {
  $('.nav .nav__link').filter(function () {
    return $(this).attr('href').toLowerCase() === window.location.pathname.toLowerCase();
  }).addClass('active');
}