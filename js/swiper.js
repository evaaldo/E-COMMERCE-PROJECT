const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    keyboard: true,
  }});