const articlesSwiper = new Swiper('.articles', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});
const watches_section = document.querySelector('.watches_section')
const watches__wrapper = document.querySelector('.watches__wrapper')
const watch__items = document.querySelectorAll('.watch__item')

if (window.innerWidth <= 770 ) {
    watches_section.classList.add('swiper')
    watches__wrapper.classList.add('swiper-wrapper')
    watch__items.forEach( el => {el.classList.add('swiper-slide')})
    new Swiper('.watches_section', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }
    });
} else {
    watches_section.classList.remove('swiper')
    watches__wrapper.classList.remove('swiper-wrapper')
    watch__items.forEach( el => {el.classList.remove('swiper-slide')})
};