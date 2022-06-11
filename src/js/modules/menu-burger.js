import $ from "jquery";

const menu_container = $("[menu-cont]");
const burger_btn = $("[burger-btn]");
const burger_menu = $("[burger-menu]");
const log_reg = $("[log-reg]");

let max_px = 768;

export function menuBurger() {
  burger_btn.on('click', () => {
    menu_container.toggleClass("_active");
    burger_btn.toggleClass('_on');
    burger_menu.toggleClass('_on');
    log_reg.toggleClass('_on');
  });
  hideShow();
  $(window).resize(function () {
    hideShow()
  });
}

const ShowHideElements = {
  show: function () {
    menu_container.removeClass("_active");

    burger_btn.removeClass("_hide");
    burger_btn.removeClass("_on");

    burger_menu.addClass("_hide");
    burger_menu.removeClass("_on");

    log_reg.addClass("_hide");
    log_reg.removeClass("_on");
  },
  hide: function () {
    burger_btn.addClass("_hide");

    burger_menu.removeClass("_hide");
    burger_menu.addClass("_on");

    log_reg.removeClass("_hide");
    log_reg.addClass("_on");
  },
}

// change default menu to burger menu if screen width <= max_px
function hideShow() {
  if (window.screen.width <= max_px) {
    ShowHideElements.show();
  } else {
    ShowHideElements.hide();
  }
}


// hide toolbar after scrolldown
function hideAfterScroll() {
  let prev_pos = $(window).scrollTop();
  let menu_height = $("[menu-tools]").outerHeight();

  $(window).scroll(function () {
    let current_pos = $(window).scrollTop();
    if (prev_pos > current_pos) {
      $("[menu-tools]").attr('style', `top: 0px`);
    } else {
      $("[menu-tools]").attr('style', `top: -${menu_height}px`);
    }
    prev_pos = current_pos;
  })
}
