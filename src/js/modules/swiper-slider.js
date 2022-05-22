import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function swiperSlider() {
  const swiper = new Swiper("[--swiper]", {
    modules: [Navigation, Pagination, Autoplay],
    // slidesPerView: 3,
    // spaceBetween: 100,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: "[--pag]",
      clickable: true,
    },
    navigation: {
      nextEl: "[--next]",
      prevEl: "[--prev]",
    },
  });
}