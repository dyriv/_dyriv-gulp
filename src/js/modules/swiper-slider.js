import Swiper, { Navigation, Pagination } from 'swiper';

export function swiperSlider() {
  const swiper = new Swiper("[swiper-body]", {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: "[swiper-pagination]",
      clickable: true,
    },
    navigation: {
      nextEl: "[swiper-next]",
      prevEl: "[swiper-prev]",
    },
  });
}