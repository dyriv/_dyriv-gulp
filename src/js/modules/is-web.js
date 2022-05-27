export function isWebp() {
  // webp support check
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  // add class  "_webp" or "_no-webp" for html
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('_webp');
    } else {
      document.querySelector('body').classList.add('_no-webp');
    }
  });
}