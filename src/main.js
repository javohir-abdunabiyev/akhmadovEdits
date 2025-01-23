import { pagesHeader } from "./components/header";

const header = document.querySelector(".header")

pagesHeader(header)

const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',  // Вертикальная прокрутка
  loop: true,  // Циклический свайп
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    forceToAxis: true, // Прокручивает только по вертикали
    sensitivity: 1, // Чувствительность прокрутки (можно изменить для лучшего опыта)
  },
});