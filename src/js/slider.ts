import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-expect-error Swiper has no types
import 'swiper/css';
// @ts-expect-error Swiper has no types
import 'swiper/css/navigation';
// @ts-expect-error Swiper has no types
import 'swiper/css/pagination';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
