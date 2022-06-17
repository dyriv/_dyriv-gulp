import $ from "jquery"

let nav_link = $("[nav-link]");

export function onePageNavigation() {
  nav_link.on("click", function () {
    nav_link.removeClass("_active-link");
    $(this).addClass("_active-link");

    // .--page -> html, .--page__body -> body
    $(".--page, .--page__body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 200
    }, 1000);
  });
}
