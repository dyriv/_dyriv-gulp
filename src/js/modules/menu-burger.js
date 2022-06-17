import $ from "jquery";

let menu_container = $("[menu-cont]");
let burger_btn = $("[burger-btn]");
let burger_menu = $("[burger-menu]");
let log_reg = $("[log-reg]");
let profile = $("[profile]");

let max_px = 768;

export function menuBurger() {
  burger_btn.on('click', () => {
    menu_container.toggleClass("_active");
    burger_btn.toggleClass('_on');
    burger_menu.toggleClass('_on');
    log_reg.toggleClass('_on');
	
	// position: fixed; to body
    let body_attr = $("body").attr("style");
    
    if (typeof body_attr !== 'undefined' && body_attr !== false) {
      console.log("attribute removed");
      $("body").removeAttr("style");
    } else {
      console.log("attribute added");
      $("body").attr("style", "position: fixed");
    }
  });
  hideShow();
  $(window).resize(function () {
    hideShow()
  });
}

const ShowHideElements = {
  // hide all elements and show burger button
  hideAll: function () {
    menu_container.removeClass("_active");

    burger_btn.removeClass("_hide");
    burger_btn.removeClass("_on");

    burger_menu.addClass("_hide");
    burger_menu.removeClass("_on");

    log_reg.addClass("_hide");
    log_reg.removeClass("_on");
	
	profile.addClass("_hide");
    profile.removeClass("_on");

    $("body").removeAttr("style"); // remove position: fixed; for body if screen size changed
  },
  // show all elements and hide burger button
  showAll: function () {
    burger_btn.addClass("_hide");

    burger_menu.removeClass("_hide");
    burger_menu.addClass("_on");

    log_reg.removeClass("_hide");
    log_reg.addClass("_on");
	
	profile.removeClass("_hide");
    profile.addClass("_on");
  },
}

// change default menu to burger menu if screen width <= max_px
function hideShow() {
  if (window.screen.width <= max_px) {
    ShowHideElements.hideAll();
  } else {
    ShowHideElements.showAll();
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
