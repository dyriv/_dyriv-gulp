import $ from "jquery";

const burger_btn = $("[burger-btn]");
const menu = $("[burger-menu]");

let max_px = 768;

export function menuBurger() {
  burger_btn.on('click', () => {
    burger_btn.toggleClass('_on');
    menu.toggleClass('_on');
  });
  hideShow();
  $(window).resize(function () {
    hideShow()
  });
}

// add or remove class _hide from burger_btn and menu
const ShowHideBurger = {
  show: function () {
    burger_btn.removeClass("_hide");
    menu.addClass("_hide");
  },
  hide: function () {
    burger_btn.addClass("_hide");
    menu.removeClass("_hide");
  },
}

// change default menu to burger menu if screen width <= max_px
function hideShow() {
  if (window.screen.width <= max_px) {
    ShowHideBurger.show();
  } else {
    ShowHideBurger.hide();
    if (menu.hasClass("_on")) {
      menu.removeClass("_on");
    } else if (burger_btn.hasClass("_on")) {
      burger_btn.removeClass("_on");
    }
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
