const swiper = new Swiper('.swiper', {
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